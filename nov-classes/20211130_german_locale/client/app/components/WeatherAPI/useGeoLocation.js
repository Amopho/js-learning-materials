import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useGeoLocation(lat, lon) {
  const [latLon, setLatLon] = useState(null);
  // Geolocation method (syntax)
  useEffect(() => {
    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition(
      // (position, options) => {
      (position, options) => {
        var berlinCrd = [52.5243988037, 13.4104995728];
        setLatLon(
          [position.coords.latitude, position.coords.longitude] || berlinCrd
          // [position.coords.latitude, position.coords.longitude]
        );
        // var lat = position.coords.latitude;
        // var lon = position.coords.longitude;
        var crd = position.coords;
        // console.log("Your current position: ");
        // console.log(`Coordinates:`);
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return latLon;
}
