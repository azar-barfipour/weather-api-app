import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import React from "react";

const Map = withScriptjs(
  withGoogleMap(({ location }) => {
    return (
      <>
        <div>map</div>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyBOY_cSTDghiSXuR9WKJFWZq6gH8KtOFvE" }}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
          defaultZoom={17}
        />
        {/* <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      /> */}
      </>
    );
  })
);

export default Map;
