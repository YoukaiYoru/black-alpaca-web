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
    <div ref={container} className="flex flex-col justify-center ">
      <div className="block-anim bg-new-blue  overflow-hidden whitespace-nowrap  mr-10">
        {/* SVG en background */}
        <div className="">
          <TitleLogo className="size-full" />
          <p className="text-all-black italic text-end md:text-sm">
            cybersecurity conference
          </p>
        </div>
      </div>

      <div className="block-anim bg-new-red flex flex-col ml-10  md:w-full">
        <h2 className="text-white text-3xl leading-none md:text-left">
          XX-XX.11.2025
        </h2>
        <p className="text-white  md:text-base leading-tight md:text-left">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
