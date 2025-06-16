import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const clouds = containerRef.current?.querySelectorAll("#clouds > .cloud");

    if (clouds) {
      clouds.forEach((cloud) => {
        gsap.fromTo(
          cloud,
          { x: "-100vw" },
          {
            x: "0vw",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              markers: false,
              onEnter: () => gsap.to(cloud, { opacity: 1, duration: 0.5 }),
            },
          }
        );
      });
    }
  }, [containerRef]);
};

export default useScrollTrigger;
