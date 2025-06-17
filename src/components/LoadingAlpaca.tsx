import LoadAlpaca from "./SVG/LoadAlpaca";
import Loading from "./SVG/Loading";
import PixelSVG from "./SVG/PixelSVG";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

export default function LoadingAlpaca() {
  const svg = useRef<SVGSVGElement | null>(null);
  const LoadingText = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    if (svg.current) {
      const rects = svg.current.querySelectorAll("rect");
      gsap.set(rects, { opacity: 1 });
      gsap.to(rects, {
        opacity: 0,
        duration: 0.1,
        stagger: { amount: 5, from: "random" },
        ease: "none",
        delay: 1,
      });
    }
  }, []);
  useGSAP(() => {
    if (LoadingText.current) {
      gsap.to(LoadingText.current, {
        duration: 2,
        scrambleText: {
          text: "cargando...",
          chars: "abc~de#f$ghijklmnopqrstuvwxyz",
          revealDelay: 0.5,
          speed: 0.25,
        },
        ease: "none",
      });
    }
  }, []);
  useGSAP(() => {
    if (LoadingText.current) {
      gsap.to(LoadingText.current, {
        duration: 1,
        delay: 5,
        scrambleText: {
          text: "próximamente...",
          chars: "ab~de#f$cibersecuni",
          revealDelay: 0.5,
          speed: 0.25,
        },
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative justify-center items-center">
        <PixelSVG
          ref={svg}
          length={20}
          className="absolute top-0 left-0 z-2 size-fit "
        />
        <LoadAlpaca />
      </div>

      <div className="w-52 md:w-96 justify-center items-center">
        <Loading />
      </div>
      <div className="text-white text-center w-2/3 md:w-1/2 flex flex-col justify-center items-center">
        <p className="text-2xl md:text-5xl" ref={LoadingText}>
          próximamente...
        </p>
        <p className="mt-5 text-xs md:text-sm">
          Por favor, espera mientras cargamos el contenido.
        </p>
      </div>
    </div>
  );
}
