import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpeakersCard from "../components/SpeakersCard";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";

import WhiteAlpacaStand from "../components/SVG/WhiteAlpacaStand";
import PixelSVG from "../components/SVG/PixelSVG";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Home() {
  const speakersData = [
    {
      id: 1,
      dateString: "19.11.2025",
      nameSpeaker: "John",
      lastNameSpeaker: "Doe",
      hourPlace: "10:00 AM - Auditorium",
      imgSrc: "/Speakers/speaker.jpeg",
      titleEvent: "Investigación y el código en el mundo de la IA",
    },
    {
      id: 2,
      dateString: "19.11.2025",
      nameSpeaker: "Jane",
      lastNameSpeaker: "Smith",
      hourPlace: "12:00 PM - Conference Hall",
      imgSrc: "/Speakers/speaker.jpeg",
      titleEvent: "Prácticas de ética legal en ciber seguridad",
    },
    {
      id: 3,
      dateString: "19.11.2025",
      nameSpeaker: "Mark",
      lastNameSpeaker: "Johnson",
      hourPlace: "2:00 PM - Auditorium",
      imgSrc: "/Speakers/speaker.jpeg",
      titleEvent: "Investigación y el código en el mundo de la IA",
    },
    {
      id: 4,
      dateString: "20.11.2025",
      nameSpeaker: "Alice",
      lastNameSpeaker: "Brown",
      hourPlace: "1:00 PM - Conference Hall",
      imgSrc: "/Speakers/speaker.jpeg",
      titleEvent: "Prácticas de ética legal en ciber seguridad",
    },
  ];

  const blocksRef = useRef<HTMLDivElement>(null);
  const someTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleMouseEnter = () => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        scrambleText: {
          text: "BLACKALPACA",
          chars: "-/&#asrawdpwdhtb",
          speed: 1,
        },
        duration: titleRef.current.innerText.length * 0.05,
        ease: "power3.inOut",
      });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    if (blocksRef.current) {
      const blocks = blocksRef.current.querySelectorAll(".block-anim");

      gsap.set(blocks, {
        y: 100,
        opacity: 0,
      });

      tl.to(blocks, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      });
    }

    if (someTitleRef.current) {
      gsap.set(someTitleRef.current, {
        x: -100,
        opacity: 0,
      });

      tl.to(someTitleRef.current, {
        opacity: 1,
        x: 0,
        duration: 4,
        scrollTrigger: {
          trigger: someTitleRef.current,
          start: "top 40%",
          end: "+=300",
          scrub: true,
          markers: false,
          toggleActions: "play none reverse none",
        },
      });
    }

    const cards = sectionRef.current?.querySelectorAll(".speakers-card");
    if (cards) {
      gsap.set(cards, {
        y: 400,
        opacity: 0,
      });

      tl.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
          toggleActions: "play none reverse none",
        },
      });
    }
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("rect");

      gsap.set(paths, { opacity: 1 });

      gsap.to(paths, {
        opacity: 0,
        duration: 0.1,
        stagger: { amount: 1, from: "random" },
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <div>
      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
        <div className="flex-1 h-full flex items-center justify-center bg-black">
          <div ref={blocksRef} className="flex flex-col space-y-[2px]">
            <div className="block-anim bg-new-blue py-2 mr-10 w-[90%] md:w-[600px]">
              <h1
                ref={titleRef}
                onMouseEnter={handleMouseEnter}
                className="text-black text-2xl md:text-[4rem] leading-none tracking-tight text-center md:text-left break-words"
              >
                BLACKALPACA
              </h1>
            </div>

            <div className="block-anim bg-new-red px-4 py-2 flex flex-col ml-10 md:ml-10">
              <h2 className="text-white text-lg md:text-3xl leading-none mb-1 text-center md:text-left">
                18-20.11.2025
              </h2>
              <p className="text-white text-xs md:text-base leading-tight text-center md:text-left">
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 h-full flex items-center justify-center bg-white"></div>
      </section>

      <section className="top-20 h-full" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-2">
          <div>
            <h1
              ref={someTitleRef}
              className="col-span-1 bg-primary px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium sticky top-20 self-start z-2"
            >
              <span>Some Speakers</span>
            </h1>

            <div className="sticky top-40 z-1 flex justify-center items-center">
              <div className="relative w-full max-w-[90vw] h-full flex justify-center items-center overflow-hidden">
                <PixelSVG
                  ref={svgRef}
                  className="top-0 left-0 z-2 w-fit h-fit absolute"
                />
                <WhiteAlpacaStand className="w-full h-full max-w-5/6" />
              </div>
            </div>
          </div>

          <aside className="col-span-1 grid grid-cols-1 gap-4 m-5 mb-5">
            <div className="space-y-5 mb-16">
              {speakersData.map((speaker, index) => (
                <div
                  key={speaker.id}
                  ref={cardRef}
                  className={`speakers-card flex w-full ${
                    index % 2 === 0
                      ? "justify-center md:justify-start"
                      : "justify-center md:justify-end"
                  }`}
                >
                  <SpeakersCard
                    dateString={speaker.dateString}
                    nameSpeaker={speaker.nameSpeaker}
                    lastNameSpeaker={speaker.lastNameSpeaker}
                    hourPlace={speaker.hourPlace}
                    imgSrc={speaker.imgSrc}
                    titleEvent={speaker.titleEvent}
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100">
          <h2 className="text-2xl text-all-black font-bold mb-4 text-center">
            Stay Tuned!
          </h2>
          <p className="text-lg text-center">More information coming soon.</p>
        </div>
      </section>
    </div>
  );
}
