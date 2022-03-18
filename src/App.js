import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
    async function fetchWeatherData() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        if (!res.ok) {
          throw new Error("something went wrong!!");
        }
        const data = await res.json();
        // let loadedData = [];
        // loadedData.push(data);
        // console.log(loadedData);
        setWeatherData(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchWeatherData();
  }, [lat, long]);
  return (
    <Layout>
      {typeof weatherData != "undefined" ? (
        <Home weatherData={weatherData} />
      ) : (
        <div></div>
      )}
      {/* <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="location" element={<Location />} />
      </Routes> */}
    </Layout>
  );
}

export default App;
