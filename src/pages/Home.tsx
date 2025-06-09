import Lanyard from "../components/Lanyard/Lanyard";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const blocksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!blocksRef.current) return;

    const blocks = blocksRef.current.querySelectorAll(".block-anim");

    gsap.from(blocks, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <section className="flex h-screen">
        {/* First Column */}
        <div className="flex-1 h-full flex items-center justify-center bg-black ">
          <div ref={blocksRef} className="flex flex-col space-y-[2px]">
            {/* Block 1: BLACKALPACA */}
            <div className="block-anim bg-new-blue px-4 py-2 mr-10">
              <h1 className="text-black text-[4rem] leading-none tracking-tight">
                BLACKALPACA
              </h1>
            </div>

            {/* Block 2: 8-20.11.2025 + Coming Soon */}
            <div className="block-anim bg-new-red px-4 py-2 flex flex-col ml-10">
              <h2 className="text-white text-3xl leading-none mb-1">
                8-20.11.2025
              </h2>
              <p className="text-white text-base leading-tight">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex-1 h-full flex items-center justify-center">
          <Lanyard fov={10} />
        </div>
      </section>
    </div>
  );
}
