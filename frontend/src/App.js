import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import logo from "./RapidSOS-Logo-retina.png";

import "./App.css";

// defautl center of the map. feel free to use exact coordinates for testing.
// you do not need to reposition the map on a new marker
const center = {
  lat: 40.7466,
  lng: -73.9811,
};

const App = () => {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: "", // shouold not be needed for dev purposes
  });

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // hook to use map component
  useEffect(() => {
    if (map) {
    }
  }, [map]);

  return (
    <div className="App">
      <img src={logo} alt="rapidsos logo" className="logo" />
      <div>
        <input className="location" name="location" placeholder="Enter Lat, Lng" />
        <button className="button">Submit</button>
      </div>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerStyle={{ height: 500, width: "100%" }}
          // options={{ ...mapOptions }}
        >
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
