"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeadingDivProps<T extends HTMLElement> = {
  title: string;
  bgColor?: string;
  triggerSection: React.RefObject<T | null>;
  duration?: number;
  offsetStart?: number;
  offsetEnd?: number;
};

export function HeadingDiv<T extends HTMLElement>({
  title,
  bgColor = "bg-primary",
  triggerSection,
  duration = 1,
  offsetStart = 0,
  offsetEnd = 0,
}: HeadingDivProps<T>) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const sec = triggerSection.current;
    const titleEl = titleRef.current;
    if (!sec || !titleEl) return;

    const ctx = gsap.context(() => {
      gsap.set(titleEl, { x: -100, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sec,
            start: () => {
              const rect = sec.getBoundingClientRect();
              const scrollY = window.scrollY;
              const elementTop = rect.top + scrollY;
              return `${elementTop - window.innerHeight + offsetStart}`;
            },
            end: () => {
              const rect = sec.getBoundingClientRect();
              const scrollY = window.scrollY;
              const elementBottom = rect.top + scrollY + rect.height;
              return `${elementBottom - offsetEnd}`;
            },
            scrub: true,
            markers: false, // quitar para producción
            toggleActions: "play none reverse none",
          },
        })
        .to(titleEl, { x: 0, opacity: 1, duration });
    }, sec);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [triggerSection, duration, offsetStart, offsetEnd]);

  return (
    <h1
      ref={titleRef}
      className={`
        ${bgColor}
        inline-block 
        text-black font-medium 
        sticky top-16 sm:top-20 
        z-10
      `}
    >
      {title}
    </h1>
  );
}
