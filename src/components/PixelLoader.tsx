import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SvgPixelLoaderProps {
  cols?: number;
  rows?: number;
  onComplete: () => void;
}

export default function SvgPixelLoader({
  cols = 5,
  rows = 4,
  onComplete,
}: SvgPixelLoaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const svgs = Array.from(
        ref.current!.querySelectorAll("svg")
      ) as SVGSVGElement[];
      const tl = gsap.timeline({ onComplete });

      gsap.utils.shuffle(svgs).forEach((svg, i) => {
        const path = svg.querySelector("path")!;
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        tl.to(
          path,
          {
            strokeDashoffset: 0, // dibuja la línea vertical
            duration: 0.3,
          },
          i * 0.1 + Math.random() * 0.05
        )
          .to(
            svg,
            {
              backgroundColor: "#000", // pasa a negro sólido
              duration: 0.1,
            },
            "<"
          )
          .to(
            svg,
            {
              autoAlpha: 0, // finalmente desaparece
              duration: 0.3,
            },
            "+=0.05"
          );
      });

      return () => tl.kill();
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array(cols * rows)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="w-full h-full bg-red-600"
            viewBox="0 0 100 100"
          >
            <path d="M50,0 L50,100" stroke="#000" strokeWidth="5" fill="none" />
          </svg>
        ))}
    </div>
  );
}
