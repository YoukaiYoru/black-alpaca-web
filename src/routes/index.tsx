// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../home/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Calendar from "../pages/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/calendar", element: <Calendar /> },
    ],
  },
]);

export default router;
