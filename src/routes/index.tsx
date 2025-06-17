// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../home/Layout";
import HomeLoading from "../pages/HomeLoading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <HomeLoading /> }],
  },
]);

export default router;
