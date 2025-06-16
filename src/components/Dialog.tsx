import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

type Props = {
  children?: React.ReactNode;
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
};

export default function Dialog({
  children,
  dialogOpen,
  setDialogOpen,
  buttonRef,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(dialogOpen);

  // Effect to handle visibility, body scroll, and Lenis based on dialogOpen
  useEffect(() => {
    if (dialogOpen) {
      setIsVisible(true); // Make the component render
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      // For closing, the animation will handle setting isVisible to false
      // and resetting scroll/Lenis in its onComplete callback.
      // This part of the effect ensures that if dialogOpen becomes false
      // while the dialog was already visible, the close animation is triggered.
      const dialogEl = dialogRef.current;
      const overlayEl = overlayRef.current;

      if (isVisible && dialogEl && overlayEl) {
        // Check if it was visible before starting close
        gsap.to(dialogEl, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.in",
        });

        gsap.to(overlayEl, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setIsVisible(false);
            document.body.style.overflow = "auto";
            lenis?.start();
          },
        });
      } else if (!isVisible) {
        // If it's already not visible (e.g. initial state or quick toggle)
        // ensure scroll and lenis are correctly set.
        document.body.style.overflow = "auto";
        lenis?.start();
      }
    }
  }, [dialogOpen, lenis, isVisible]); // isVisible is needed here for the close logic

  // Effect to handle the OPEN animation once elements are rendered (isVisible is true)
  useEffect(() => {
    if (dialogOpen && isVisible) {
      const dialogEl = dialogRef.current;
      const overlayEl = overlayRef.current;
      const buttonRect = buttonRef.current?.getBoundingClientRect();

      if (dialogEl && overlayEl) {
        // Set initial states for the open animation
        gsap.set(overlayEl, { opacity: 0 });
        gsap.set(dialogEl, {
          opacity: 0,
          scale: 0.5,
          x: buttonRect
            ? buttonRect.left + buttonRect.width / 2 - window.innerWidth / 2
            : 0,
          y: buttonRect
            ? buttonRect.top + buttonRect.height / 2 - window.innerHeight / 2
            : 0,
        });

        // Animate in
        gsap.to(overlayEl, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dialogEl, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }
  }, [dialogOpen, isVisible, buttonRef]); // Depends on dialogOpen, isVisible, and buttonRef

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-51 flex items-center justify-center " // Added bg-black for overlay visibility
      onClick={() => setDialogOpen(false)}
    >
      <div
        ref={dialogRef}
        className="border-all-black border-8 bg-white p-6 shadow-lg size-4/5 max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
