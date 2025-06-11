// src/components/CustomCursor.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    // Creación de los métodos para mover el cursor usando quickTo
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    // Evento para el movimiento del mouse
    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove); // Limpieza del evento
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div
      ref={cursorRef}
      className="ball fixed top-0 left-0 w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-50"
    />
  );
};

export default CustomCursor;
