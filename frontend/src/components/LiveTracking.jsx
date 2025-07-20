import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -4.34,
  lng: -24.489,
};

const LiveTracking = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(center);

  useEffect(() => {
    
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([center.lat, center.lng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    const updateMarker = (lat, lng) => {
      if (!markerRef.current) {
        markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);
      } else {
        markerRef.current.setLatLng([lat, lng]);
      }

      mapRef.current.setView([lat, lng]);
    };

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
      updateMarker(latitude, longitude);
    });

   
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
      updateMarker(latitude, longitude);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={containerStyle}>
      <div id="map" style={containerStyle}></div>
    </div>
  );
};

export default LiveTracking;
