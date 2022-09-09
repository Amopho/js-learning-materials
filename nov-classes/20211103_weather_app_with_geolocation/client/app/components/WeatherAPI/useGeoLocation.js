import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

export default function useGeoLocation(lat, lon) {
  const [latLon, setLatLon] = useState(null);
  // Geolocation method (syntax)
  useEffect(() => {
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return latLon;
}
