import * as React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin); // Register the MorphSVGPlugin

const Loading = (props: React.SVGProps<SVGSVGElement>) => {
  useEffect(() => {
    gsap.fromTo(
      "#white-bar",
      { attr: { width: 0 } },
      {
        attr: { width: 537.896 },
        duration: 5,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="100 900 900 180"
      {...props}
    >
      <rect
        id="upper-bar"
        x="144.349"
        y="946.604"
        width="790.302"
        height="13.478"
        fill="white"
      />
      <rect
        x="934.651"
        y="960.082"
        width="14.7033"
        height="13.478"
        fill="white"
      />
      <rect
        x="949.354"
        y="973.56"
        width="14.7033"
        height="42.8846"
        fill="white"
      />
      <rect
        x="934.651"
        y="1016.45"
        width="14.7033"
        height="13.478"
        fill="white"
      />
      <rect
        x="144.349"
        y="1029.92"
        width="14.7033"
        height="13.478"
        transform="rotate(-180 144.349 1029.92)"
        fill="white"
      />
      <rect
        x="129.646"
        y="1016.45"
        width="14.7033"
        height="42.8846"
        transform="rotate(-180 129.646 1016.45)"
        fill="white"
      />

      {/* White Bar (animated) */}
      <rect
        id="white-bar"
        x="149.349" // Fix x position
        y="972.45"
        width="0" // Start with 0 width for animation
        height="42.8846"
        fill="white"
      />

      {/* Background loading bar */}
      <rect
        id="bg-loading-bar"
        width="775.802"
        height="42.8846"
        transform="matrix(1 8.74228e-08 8.74228e-08 -1 153.047 1015.45)"
        fill="white"
        fillOpacity="0.3"
      />
      <rect
        x="144.349"
        y="973.56"
        width="14.7033"
        height="13.478"
        transform="rotate(-180 144.349 973.56)"
        fill="white"
      />
      <rect
        x="144.349"
        y="1029.92"
        width="790.302"
        height="13.478"
        fill="white"
      />
    </svg>
  );
};

export default Loading;
