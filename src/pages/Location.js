import { useRef, useState, useEffect, useCallback } from "react";
import Map from "../components/Location/Map";
import Search from "../components/Location/Search";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import classes from "../components/Location/Location.module.css";
// import { formatRelative } from "date-fns";

const Location = () => {
  const [lat, setLat] = useState();
  const [lng, setLnt] = useState();
  const [weatherData, setWeatherData] = useState();
  const locationInputRef = useRef("");
  const enteredLocation = locationInputRef.current.value;
  const encodedAddress = encodeURI(enteredLocation);
  console.log(encodedAddress);

  // fix later
  const REACT_APP_MAP_API_URL =
    "https://maps.googleapis.com/maps/api/geocode/json";
  const REACT_APP_WETHER_MAP_API_KEY =
    "AIzaSyBOY_cSTDghiSXuR9WKJFWZq6gH8KtOFvE";
  const REACT_APP_MAP_API_KEY = "AIzaSyBSHjilPkBHUzdLmo7xyw2EEC2W8uigP_A";

  const addLocationHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${REACT_APP_MAP_API_URL}?address=${encodedAddress}&key=${REACT_APP_WETHER_MAP_API_KEY}`
    );
    console.log(response);
    const mapData = await response.json();
    // get lat and lng from address
    console.log(mapData.results[0].geometry.location.lat);
    setLat(mapData.results[0].geometry.location.lat);
    setLnt(mapData.results[0].geometry.location.lng);
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

  const center = {
    lat: 49.2809128,
    lng: -122.9812382,
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div className={classes["map-wrapper"]}>
      {/* <Search panTo={panTo} /> */}
      <WrappedMap
        onMapLoad={onMapLoad}
        center={center}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_MAP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ width: "100vw", height: "100vh" }} />}
      />
    </div>
  );
};
export default Location;
