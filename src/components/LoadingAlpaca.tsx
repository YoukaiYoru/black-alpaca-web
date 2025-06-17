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
          tweenLength: true,
        },
        ease: "none",
      });
    }
  }, []);
  useGSAP(() => {
    if (LoadingText.current) {
      gsap.to(LoadingText.current, {
        duration: 2,
        delay: 5,
        scrambleText: {
          text: "próximamente...",
          chars: "abc~de#f$ghijklmnopqrstuvwxyz",
          revealDelay: 0.5,
          speed: 0.25,
          tweenLength: true,
        },
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center size-5/6">
      <div className="relative justify-center items-center overflow-hidden">
        <PixelSVG ref={svg} length={20} className="absolute top-0 left-0 z-2" />
        <LoadAlpaca className="h-4/5 " />
      </div>

      <Loading />
      <div className="text-white text-center">
        <p className="text-2xl md:text-5xl" ref={LoadingText}></p>
        <p className="text-xs md:text-sm">
          Please wait while we load the content.
        </p>
      </div>
    </div>
  );
}
