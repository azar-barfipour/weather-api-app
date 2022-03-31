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
          <Marker
            position={center}
            onClick={() => {
              // setSelected(center);
            }}
          />
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
        {selected && (
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
              <h2>{weatherData && weatherData.main.temp.toFixed(0)} &deg;</h2>
              {weatherData &&
                weatherData.weather.map((wData) => {
                  return <p>{wData.main}</p>;
                })}
              <p>{weatherData && weatherData.name}</p>
            </div>
          </InfoWindow>
        )}
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
