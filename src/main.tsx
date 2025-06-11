import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import CustomCursor from "./components/CustomCursor";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ReactLenis from "lenis/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root />
    <CustomCursor />
    {/* RouterProvider is used to provide the router to the application */}
    {/* This allows us to use React Router for navigation and routing */}
    <RouterProvider router={router} />
  </StrictMode>
);
