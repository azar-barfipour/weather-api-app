import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState(49.2809128);
  const [long, setLong] = useState(-122.9812382);
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
        setWeatherData(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchWeatherData();
  }, [lat, long]);
  return (
    <Layout>
      <Routes>
        <Route
          path="home"
          element={
            typeof weatherData != "undefined" ? (
              <Home weatherData={weatherData} />
            ) : (
              <div></div>
            )
          }
        />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </Layout>
  );
}

export default App;
