// import React from "react";
// import { withScriptjs, withGoogleMap } from "react-google-maps";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// // import { formatRelative } from "date-fns";
// // const google = window.google;
// // console.log(google);

// const libraries = ["places"];
// const mapContainerStyle = { width: "100vw", height: "100vh" };

// const Map = ({ center }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBSHjilPkBHUzdLmo7xyw2EEC2W8uigP_A",
//     libraries,
//   });
//   if (isLoaded) return "loading";
//   if (loadError) return "error";
//   return (
//     <div>
//       <GoogleMap
//         //   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSHjilPkBHUzdLmo7xyw2EEC2W8uigP_A&v=3.exp&libraries=geometry,drawing,places"
//         //   loadingElement={<div style={{ height: `100%` }} />}
//         //   containerElement={<div style={{ height: `400px` }} />}
//         //   mapElement={<div style={{ height: `100%` }} />}
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//       ></GoogleMap>
//     </div>
//   );
// };

import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useState } from "react";
import MarkerLocation from "./MarkerLocation";

const Map = ({ center }) => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const isEmptyMarkers = markers.length === 0;

  //   when click on map insert location in the array
  const MarkerHandler = (event) => {
    setMarkers((current) => [
      ...current,
      { lat: event.latLng.lat(), lng: event.latLng.lng() },
    ]);
  };
  const MarkerLocationHandler = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={center}
        // if marker is not empty create mark on the position
        onClick={MarkerHandler}
      >
        {isEmptyMarkers ? (
          <Marker position={center} />
        ) : (
          markers.map((marker, ind) => {
            return (
              <Marker
                key={ind}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                onClick={() => {
                  setSelected(marker);
                }}
              />
            );
          })
        )}
        {/* if mark a position then show window on that position */}
        {selected ? (
          <InfoWindow
            position={{
              lat: selected.lat,
              lng: selected.lng,
            }}
            //   close the window
            onCloseClick={() => {
              setSelected("");
            }}
          >
            <div>
              <h2>{weatherData && weatherData.main.temp}</h2>
              <p>{weatherData && weatherData.name}</p>
              {weatherData &&
                weatherData.weather.map((wData) => {
                  return <p>{wData.main}</p>;
                })}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      {markers &&
        markers.map((marker) => {
          return (
            <MarkerLocation
              lat={marker.lat}
              lng={marker.lng}
              onMarkerLocation={MarkerLocationHandler}
            />
          );
        })}
    </>
  );
};

export default Map;
