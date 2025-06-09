// src/home/Layout.tsx
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { animatePageIn } from "../animations/pageTransition";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    animatePageIn();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div
          id="banner-1"
          className="min-h-screen bg-primary z-10 fixed top-0 left-0 w-1/4"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-primary z-10 fixed top-0 left-1/4 w-1/4"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-primary z-10 fixed top-0 left-2/4 w-1/4"
        />
        <div
          id="banner-4"
          className="min-h-screen bg-primary z-10 fixed top-0 left-3/4 w-1/4"
        />
        <NavBar />
        <main className="pt-20 px-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
