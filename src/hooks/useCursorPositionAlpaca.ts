import { useState, useEffect } from "react";

const useCursorPosition = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  modalStates: Record<string, boolean>
) => {
  const [cursorX, setCursorX] = useState(0);

  useEffect(() => {
    // Si hay un modal abierto, desactivamos el seguimiento del cursor
    if (Object.values(modalStates).some((isOpen) => isOpen)) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const limitedX = Math.max(
          0,
          Math.min(e.clientX - rect.left, rect.width)
        );
        setCursorX(limitedX);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, modalStates]); // Dependemos de modalStates

  return cursorX;
};

export default useCursorPosition;
