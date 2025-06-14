import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./Routers";

// Correct usage:
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
