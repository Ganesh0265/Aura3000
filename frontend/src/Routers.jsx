// src/router/Routes.jsx
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Pages/Signup";
import { LoginPage } from "./Pages/Login";
import { Dashboard } from "./Admin/Pages/Dashboard";
import MyWardrobePage from "./Admin/Pages/WardrobePage";
import Outfit from "./Admin/Pages/Outfit";
import AddItemPage from "./Admin/Pages/AddItemPage";
import AddOutfitPage from "./Admin/Pages/AddOutfitPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/wardrobe" element={<MyWardrobePage />} />
      <Route path="/outfit" element={<Outfit />} />
      <Route path="/additem" element={<AddItemPage />} />
      <Route path="addoutfit" element={<AddOutfitPage />} />
    </Routes>
  );
}
