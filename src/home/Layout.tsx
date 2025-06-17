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
    <div>
      {/* Banners with responsive design */}
      {["banner-1", "banner-2", "banner-3", "banner-4"].map((id, idx) => (
        <div
          key={id}
          id={id}
          className={`
            min-h-screen bg-primary z-11 fixed top-0 left-0
            w-full 
            sm:w-1/2 md:w-1/4
            ${idx === 1 ? "sm:left-1/2 md:left-1/4" : ""}
            ${idx === 2 ? "sm:left-0 md:left-2/4" : ""}
            ${idx === 3 ? "sm:left-1/2 md:left-3/4" : ""}
          `}
        />
      ))}

      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
