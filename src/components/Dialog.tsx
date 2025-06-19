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

  useEffect(() => {
    if (dialogOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      const dialogEl = dialogRef.current;
      const overlayEl = overlayRef.current;

      if (isVisible && dialogEl && overlayEl) {
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
        document.body.style.overflow = "auto";
        lenis?.start();
      }
    }
  }, [dialogOpen, lenis, isVisible]);

  useEffect(() => {
    if (dialogOpen && isVisible) {
      const dialogEl = dialogRef.current;
      const overlayEl = overlayRef.current;
      const buttonRect = buttonRef.current?.getBoundingClientRect();

      if (dialogEl && overlayEl) {
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
  }, [dialogOpen, isVisible, buttonRef]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 flex justify-center z-50"
      onClick={() => setDialogOpen(false)}
    >
      <div
        ref={dialogRef}
        className="h-fit mx-5 max-w-xl border-white border-4 flex my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
