// src/router/Routes.jsx
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Pages/Signup";
import { LoginPage } from "./Pages/Login";
import { Dashboard } from "./Admin/Pages/Dashboard";
import MyWardrobePage from "./Admin/Pages/WardrobePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/wardrobe" element={<MyWardrobePage />} />
    </Routes>
  );
}
