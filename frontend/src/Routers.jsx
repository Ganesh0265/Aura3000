// src/router/Routes.jsx
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Pages/Signup";
import { LoginPage } from "./Pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  );
}
