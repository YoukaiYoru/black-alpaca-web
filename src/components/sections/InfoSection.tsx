import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import BlackAlpaca from "../SVG/BlackAlpaca";

export default function InfoSection() {
  const [cursorX, setCursorX] = useState(0);
  const alpacaRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleAlpacaClick = () => {
    if (alpacaRef.current) {
      gsap.to(alpacaRef.current, {
        y: -400,
        duration: 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  return (
    <section onClick={handleAlpacaClick} className="relative">
      <div className="flex flex-col justify-between h-lvh bg-new-blue relative">
        <div className="flex-grow"></div>
        <div className="bg-primary h-16 w-full relative">
          <BlackAlpaca
            ref={alpacaRef}
            className="w-1/7 absolute mb-13"
            style={{ left: cursorX, bottom: 0, transform: "translateX(-50%)" }}
            onClick={handleAlpacaClick}
          />
        </div>
      </div>
    </section>
  );
}
