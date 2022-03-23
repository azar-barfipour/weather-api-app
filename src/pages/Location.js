import { useRef, useState, useEffect } from "react";
import Map from "../components/Location/Map";

// fix later
const REACT_MAP_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const REACT_MAP_API_KEY = "AIzaSyBOY_cSTDghiSXuR9WKJFWZq6gH8KtOFvE";

const Location = () => {
  const [lat, setLat] = useState();
  const [lng, setLnt] = useState();
  const [weatherData, setWeatherData] = useState();
  const locationInputRef = useRef("");
  const addLocationHandler = async (e) => {
    e.preventDefault();
    const enteredLocation = locationInputRef.current.value;
    const encodedAddress = encodeURI(enteredLocation);
    console.log(encodedAddress);
    const response = await fetch(
      `${REACT_MAP_API_URL}?address=${encodedAddress}&key=${REACT_MAP_API_KEY}`
    );
    const mapData = await response.json();
    // get lat and lng from address
    setLat(mapData.results[0].geometry.location.lat);
    setLnt(mapData.results[0].geometry.location.lng);
    // remove later
    console.log(mapData.results[0].geometry.location.lat);
    console.log(mapData.results[0].geometry.location.lng);
  };
  useEffect(() => {
    // get weather from weather api by setting the location
    const getWeather = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        if (!res.ok) {
          throw new Error("please enter your location!!");
        }
        const data = await res.json();
        console.log(data);
        setWeatherData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, [lat, lng]);

  const location = {
    address: { locationInputRef },
    lat,
    lng,
  };

  return (
    <>
      <form onSubmit={addLocationHandler}>
        <label>Location</label>
        <input type="text" ref={locationInputRef}></input>
        <button>Search</button>
      </form>
      {weatherData && <p>{weatherData.name}</p>}
      {weatherData && <p>{weatherData.main.temp}</p>}
      <Map
        location={location}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBOY_cSTDghiSXuR9WKJFWZq6gH8KtOFvE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </>
  );
};
export default Location;
