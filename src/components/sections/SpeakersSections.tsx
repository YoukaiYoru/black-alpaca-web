import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PixelSVG from "../SVG/PixelSVG";
import WhiteAlpacaStand from "../SVG/WhiteAlpacaStand";
import SpeakersCard from "../SpeakersCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Speaker = {
  id: number;
  dateString: string;
  nameSpeaker: string;
  lastNameSpeaker: string;
  hourPlace: string;
  imgSrc: string;
  titleEvent: string;
};

export function SpeakersSection({ speakers }: { speakers: Speaker[] }) {
  const section = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (title.current) {
        gsap.set(title.current, { x: -100, opacity: 0 });
        gsap.to(title.current, {
          x: 0,
          opacity: 1,
          duration: 4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title.current,
            start: "top 40%",
            end: "+=300",
            scrub: true,
          },
        });
      }

      const cards = section.current?.querySelectorAll(".speakers-card");
      if (cards) {
        gsap.set(cards, { y: 400, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      }

      if (svg.current) {
        const rects = svg.current.querySelectorAll("rect");
        gsap.set(rects, { opacity: 1 });
        gsap.to(rects, {
          opacity: 0,
          duration: 0.1,
          stagger: { amount: 1, from: "random" },
          scrollTrigger: {
            trigger: svg.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }
    },
    { scope: section }
  );

  return (
    <section ref={section} className="top-20 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-2">
        <div>
          <h1
            ref={title}
            className="col-span-1 bg-primary px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium sticky top-20 self-start z-1"
          >
            <span>Some Speakers</span>
          </h1>
          <div className="sticky top-40 z-0 flex justify-center items-center">
            <div className="relative w-full max-w-[90vw] h-full flex justify-center items-center overflow-hidden">
              <PixelSVG
                ref={svg}
                className="top-0 left-0 z-2 w-fit h-fit absolute"
              />
              <WhiteAlpacaStand className="w-full h-full max-w-5/6" />
            </div>
          </div>
        </div>
        <aside className="col-span-1 grid grid-cols-1 gap-4 m-5 mb-5">
          <div className="space-y-5 mb-16">
            {speakers.map((s, i) => (
              <div
                key={s.id}
                className={`speakers-card flex w-full ${
                  i % 2 === 0
                    ? "justify-center md:justify-start"
                    : "justify-center md:justify-end"
                }`}
              >
                <SpeakersCard {...s} />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
