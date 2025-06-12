import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpeakersCard from "../components/SpeakersCard";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";

import WhiteAlpacaStand from "../components/SVG/WhiteAlpacaStand";
import PixelSVG from "../components/SVG/PixelSVG";
import { SiIntel } from "react-icons/si";

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

  const BrandsSection = () => {
    const brandsRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const brands = brandsRef.current?.querySelectorAll("li");

    //   if (brands) {
    //     gsap.set(brands, {
    //       opacity: 0,
    //       y: 50, // Set initial position to be 50px below the normal position
    //     });

    //     gsap.to(brands, {
    //       opacity: 1,
    //       y: 0,
    //       stagger: 0.3, // Add stagger to create a nice effect between each logo
    //       duration: 1, // Set a proper duration for the effect
    //       delay: 0.5,
    //       scrollTrigger: {
    //         trigger: brandsRef.current, // Use the proper ref for the brands section
    //         start: "top 80%", // Animation triggers when the section is at 80% from the top of the viewport
    //         end: "bottom 20%", // Animation ends when the section reaches 20% from the bottom
    //         scrub: true, // Smooth scrolling effect
    //         markers: false, // Set to `true` if you want to see the start/end of the ScrollTrigger
    //       },
    //     });
    //   }
    // }, []);

    useEffect(() => {
      const brands = brandsRef.current?.querySelectorAll("li");

      if (brands) {
        // Set initial state for each brand
        gsap.set(brands, {
          opacity: 0,
          y: 50, // Start 50px below their final position
          rotation: 0, // Start without rotation
          scale: 0.5, // Start scaled down
        });

        // Animate each brand with a different animation
        brands.forEach((brand, index) => {
          const animationDelay = index * 0.2; // Add staggered delays for each brand

          gsap.to(brand, {
            opacity: 1,
            y: 0, // Animate to the normal position
            scale: 1, // Animate to normal scale
            rotation: index % 2 === 0 ? 360 : -360, // Alternate rotation direction
            duration: 1, // Different durations for the animations
            delay: animationDelay, // Stagger the animations
            scrollTrigger: {
              trigger: brandsRef.current,
              start: "top 50%", // Trigger animation when the section reaches 80% of the viewport
              end: "bottom 50%", // End when the section reaches 20% from the bottom
              scrub: true, // Smooth scrolling effect
              markers: false, // Set to true to debug
            },
          });
        });
      }
    }, []);

    // useEffect(() => {
    //   const brands = brandsRef.current?.querySelectorAll("li");

    //   if (brands) {
    //     // Set initial state for each brand
    //     gsap.set(brands, {
    //       opacity: 0,
    //       scale: 0.5, // Start scaled down
    //     });

    //     // Animate each brand with a different animation
    //     brands.forEach((brand, index) => {
    //       const animationDelay = index * 0.2; // Add staggered delays for each brand

    //       // Randomly assign direction (left, right, top, bottom)
    //       const direction = ["left", "right", "top", "bottom"][index % 4];

    //       let startX = 0;
    //       let startY = 0;

    //       // Set the starting position based on the direction
    //       if (direction === "left") {
    //         startX = -200; // Start from the left
    //       } else if (direction === "right") {
    //         startX = 200; // Start from the right
    //       } else if (direction === "top") {
    //         startY = -200; // Start from the top
    //       } else if (direction === "bottom") {
    //         startY = 200; // Start from the bottom
    //       }

    //       gsap.to(brand, {
    //         opacity: 1,
    //         scale: 1, // Animate to normal scale
    //         x: startX, // Move in the x-direction
    //         y: startY, // Move in the y-direction
    //         stagger: 0.3, // Stagger each brand's animation
    //         duration: 1.5, // Set duration for the animation
    //         delay: animationDelay, // Stagger the animations
    //         scrollTrigger: {
    //           trigger: brandsRef.current,
    //           start: "top 80%", // Animation triggers when the section is at 80% from the top of the viewport
    //           end: "bottom 20%", // Animation ends when the section reaches 20% from the bottom
    //           scrub: true, // Smooth scrolling effect
    //           markers: false, // Set to true to debug
    //         },
    //       });
    //     });
    //   }
    // }, []);

    return (
      <section ref={brandsRef}>
        <ul className="flex justify-evenly items-center h-64">
          <li><SiIntel className="text-8xl" /></li>
          <li><SiIntel className="text-8xl" /></li>
          <li><SiIntel className="text-8xl" /></li>
          <li><SiIntel className="text-8xl" /></li>
        </ul>
      </section>
    );
  };


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
                  className={`speakers-card flex w-full ${index % 2 === 0
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
          <p className="text-lg text-center text-all-black">More information coming soon.</p>
        </div>
      </section>

      <section>
        <h1
          ref={someTitleRef}
          className="col-span-1 bg-new-blue px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium top-20 self-start z-2"
        >
          <span>Event sponsors</span>
        </h1>
        <BrandsSection />
      </section>

      {/* Here should be some design */}
      <section>
        <div className="flex flex-col items-center justify-center h-64 bg-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Stay Tuned!
          </h2>
          <p className="text-lg text-center">More information coming soon.</p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center h-64 bg-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Stay Tuned!
          </h2>
          <p className="text-lg text-center">More information coming soon.</p>
        </div>
      </section>
    </div>
  );
}
