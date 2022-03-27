import { useState, useEffect } from "react";

const MarkerLocation = ({ lat, lng, onMarkerLocation }) => {
  useEffect(() => {
    // get weather from weather api by setting the location
    const getWeather = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        onMarkerLocation(data);
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, [lat, lng]);
  return <></>;
};

export default MarkerLocation;
