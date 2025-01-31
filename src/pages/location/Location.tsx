import React, { useState, useEffect } from "react";
import "./Location.css";

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ ...location, error: error.message });
        }
      );
    } else {
      setLocation({ ...location, error: "Geolocation is not supported by this browser." });
    }
  }, []);

  return (
    <div className="locationnoew">
      {/* <h2>User Location</h2> */}
      {location.error ? (
        <p>{location.error}</p>
      ) : (
        <p>
           {location.latitude},  {location.longitude}
        </p>
      )}
    </div>
  );
};

export default Location;
