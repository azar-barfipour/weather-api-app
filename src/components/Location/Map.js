import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { useState, useCallback, useRef } from "react";
import MarkerLocation from "./MarkerLocation";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";
import mapStyles from "./mapStyles";

const optionMap = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};
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
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div>
      <GoogleMap
        onLoad={onMapLoad}
        defaultZoom={7}
        defaultCenter={center}
        // if marker is not empty create mark on the position
        onClick={MarkerHandler}
        defaultOptions={optionMap}
      >
        {isEmptyMarkers ? (
          <Marker
            position={center}
            onClick={() => {}}
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
            //close the window
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
                  weatherData.weather.map((wData, ind) => {
                    return (
                      <p>
                        {wData.main === "Clear" && <Sunny key={ind} />}
                        {wData.main === "Rain" && <Rain key={ind} />}
                        {wData.main === "Clouds" && <Cloudy key={ind} />}
                        {wData.main === "Snow" && <Snow key={ind} />}
                      </p>
                    );
                  })}
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      {markers &&
        markers.map((marker, ind) => {
          return (
            <MarkerLocation
              key={ind}
              lat={marker.lat}
              lng={marker.lng}
              onMarkerLocation={MarkerLocationHandler}
            />
          );
        })}
    </div>
  );
};

export default Map;
