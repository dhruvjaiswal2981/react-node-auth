import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import axios from "axios";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [mapConfig, setMapConfig] = useState({ center: [20.5937, 78.9629], zoom: 5 });

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/map", {
          headers: { Authorization: token },
        });
        setMapConfig(res.data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };
    fetchMapData();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          top: "-50px",
          left: "-50px",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 3, delay: 1 }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          bottom: "-100px",
          right: "-100px",
          filter: "blur(100px)",
        }}
      />

      {/* Semi-transparent Map Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "10px 20px",
          borderRadius: "10px",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          zIndex: 999,
          backdropFilter: "blur(10px)",
        }}
      >
        🌍 Interactive Map
      </motion.div>

      {/* Leaflet Map */}
      <MapContainer center={mapConfig.center} zoom={mapConfig.zoom} style={{ height: "100vh", zIndex: 1 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default MapView;
