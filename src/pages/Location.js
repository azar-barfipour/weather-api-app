import { useState, useEffect } from "react";
import Map from "../components/Location/Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import classes from "../components/Location/Location.module.css";

const Location = () => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState();
  const [lat, setLat] = useState();
  const [lng, setLnt] = useState();

  useEffect(() => {
    // get weather from weather api by setting the location
    const getWeather = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        if (!res.ok) {
          throw new Error("click on map marker for weather info");
        }
      } catch (err) {
        setModal(true);
        setError(err.message);
      }
    };
    getWeather();
  }, [lat, lng]);

  const center = {
    lat: 49.2809128,
    lng: -122.9812382,
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <>
      {modal && <div className={classes["modal"]}>{error}</div>}
      <div>
        <div className={classes["map-wrapper"]}>
          <WrappedMap
            center={center}
            googleMapURL={`${process.env.REACT_APP_MAP_API_URL}?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ width: "100vw", height: "100vh" }} />}
          />
        </div>
      </div>
    </>
  );
};
export default Location;
