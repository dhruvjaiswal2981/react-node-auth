import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MapView from "./components/MapView";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/map" element={<PrivateRoute element={<MapView />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
