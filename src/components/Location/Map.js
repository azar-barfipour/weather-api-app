import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useState } from "react";
import MarkerLocation from "./MarkerLocation";
import { ReactComponent as CloudSvg } from "../Icons/cloud.svg";
import { ReactComponent as RainSvg } from "../Icons/rain.svg";
import { ReactComponent as SunSvg } from "../Icons/sun.svg";
import { ReactComponent as SnowSvg } from "../Icons/snow.svg";
import mapStyles from "./mapStyles";

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
        defaultOptions={{ styles: mapStyles }}
      >
        {isEmptyMarkers ? (
          <Marker
            position={center}
            onClick={() => {
              // setSelected(center);
            }}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/orange.png",
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
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/orange.png",
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
              <h3>{weatherData && weatherData.name}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>{weatherData && weatherData.main.temp.toFixed(0)} &deg;</h2>
                {weatherData &&
                  weatherData.weather.map((wData) => {
                    return (
                      <p style={{ width: "50px" }}>
                        {wData.main === "Clear" && <SunSvg />}
                        {wData.main === "Rain" && <RainSvg />}
                        {wData.main === "Clouds" && <CloudSvg />}
                        {wData.main === "Snow" && <SnowSvg />}
                      </p>
                    );
                  })}
              </div>
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
