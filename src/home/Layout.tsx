import { Outlet } from "react-router-dom";

import RandomPixelLoader from "../components/PixelLoader";
import { useState } from "react";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <RandomPixelLoader
          cols={4}
          rows={3}
          onComplete={() => setLoading(false)}
        />
      )}
      <div className={loading ? "hidden" : "flex flex-col min-h-screen"}>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
}
