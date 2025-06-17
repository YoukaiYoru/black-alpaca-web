import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";
import TitleLogo from "../SVG/TitleLogo";

gsap.registerPlugin(useGSAP, ScrambleTextPlugin);

export function HeroBlocks() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blocks = container.current?.querySelectorAll(".block-anim");
      if (!blocks) return;
      gsap.set(blocks, { y: 100, opacity: 0 });
      gsap.to(blocks, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 2,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex flex-col justify-center transform scale-100 md:scale-100 lg:scale-100"
    >
      <div className="block-anim bg-new-blue p-4 overflow-hidden whitespace-nowrap  mr-10">
        {/* SVG en background */}
        <div className="">
          <TitleLogo style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <div className="block-anim bg-new-red px-4 py-2 flex flex-col ml-10">
        <h2 className="text-white text-lg md:text-3xl leading-none mb-1 text-center md:text-left">
          XX-XX.11.2025
        </h2>
        <p className="text-white text-xs md:text-base leading-tight text-center md:text-left">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
