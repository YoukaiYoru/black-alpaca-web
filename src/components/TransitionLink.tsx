// src/components/TransitionLink.tsx
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animatePageOut } from "../animations/pageTransition";
import {
  animateUnderlineIn,
  animateUnderlineOut,
} from "../animations/underlineAnimation";
import LogoVariant from "./SVG/LogoVariant"; // Assuming this is the SVG component you want to use
interface Props {
  svg?: boolean;
  href: string;
  label?: string;
  className?: string;
  animateOut?: (href: string, navigate: (path: string) => void) => void;
  closeClick?: (onCloseComplete: () => void) => void;
  underlineColorClass?: string;
}
const TransitionLink: React.FC<Props> = ({
  svg = false,
  href,
  label,
  className = "text-white hover:text-gray-300 transition-colors text-sm md:text-base",
  animateOut = animatePageOut,
  closeClick,
  underlineColorClass = "bg-primary",
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    if (pathname !== href) {
      e.preventDefault();

      if (closeClick) {
        closeClick(() => {
          animateOut(href, navigate);
        });
      } else {
        animateOut(href, navigate);
      }
    }
  };

  useGSAP(() => {
    if (!linkRef.current || !underlineRef.current) return;

    const link = linkRef.current;
    const underline = underlineRef.current;

    const onEnter = () => animateUnderlineIn(underline);
    const onLeave = () => animateUnderlineOut(underline);

    link.addEventListener("mouseenter", onEnter);
    link.addEventListener("mouseleave", onLeave);

    return () => {
      link.removeEventListener("mouseenter", onEnter);
      link.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link
      to={href}
      onClick={handleClick}
      ref={linkRef}
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      {svg && (
        <LogoVariant className="inline-block align-text-bottom w-32 h-12" />
      )}
      {/* Etiqueta de texto siempre visible */}
      {!svg && <span className="inline-block align-text-bottom">{label}</span>}
      {/* Línea de subrayado oculta inicialmente */}
      <span
        ref={underlineRef}
        className={`
          absolute left-0 bottom-0
          h-[2px] w-full
          origin-left scale-x-0 opacity-0
          pointer-events-none
          ${underlineColorClass}
        `}
      />
    </Link>
  );
};

export default TransitionLink;
