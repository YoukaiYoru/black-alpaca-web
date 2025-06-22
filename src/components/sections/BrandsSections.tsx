// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SiAccuweather, SiAdobephotoshop, SiAirbnb, SiBmw, SiIntel } from "react-icons/si";
// import { BsTwitterX } from "react-icons/bs";
// import { FaWalkieTalkie } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";

// gsap.registerPlugin(useGSAP);

// export function BrandsSection() {
//   const container = useRef<HTMLDivElement>(null);

//   const logoSet = [
//     [<SiIntel className="text-6xl md:text-8xl" />], [<SiBmw className="text-6xl md:text-8xl" />],
//     [<BsTwitterX className="text-6xl md:text-8xl" />], [<FaFacebook className="text-6xl md:text-8xl" />],
//     [<FaWalkieTalkie className="text-6xl md:text-8xl" />], [<SiAccuweather className="text-6xl md:text-8xl" />],
//     [<SiAirbnb className="text-6xl md:text-8xl" />], [<SiAdobephotoshop className="text-6xl md:text-8xl" />],
//   ];


//   useGSAP(
//     () => {
//       const items = container.current?.querySelectorAll("li");
//       if (!items) return;
//       // gsap.set(items, { opacity: 0, scale: 0.5, x: -50});
//       gsap.set(items, { x: -50, y: 50});
//       gsap.to(items, {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         // scale: 1,
//         duration: 0.8,
//         // stagger: 0.3,
//         // scrollTrigger: {
//         //   trigger: container.current,
//         //   start: `top 60%`,
//         //   end: `bottom 70%`,
//         //   scrub: true,
//         //   markers: false,
//         // },
//       });

//       const title = container.current?.querySelector("h1");
//       if (!title) return;
//       gsap.set(title, { x: -100, opacity: 0 });
//       gsap.to(title, {
//         x: 0,
//         opacity: 1,
//         duration: 4,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: container.current,
//           start: `top ${window.innerHeight - 100}px`,
//           end: `bottom ${window.innerHeight}px`,
//           scrub: true,
//           markers: false,
//         },
//       });
//     },
//     { scope: container }
//   );

//   return (
//     <section ref={container} className="h-full">
//       <h1 className="col-span-1 sticky bg-new-blue px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium top-20 self-start z-2">
//         <span>Event sponsors</span>
//       </h1>
//       <ul className="flex justify-evenly items-center h-64">
//         {[...Array(4)].map((_, i) => (
//           <li key={i}>
//             <SiIntel className="text-6xl md:text-8xl" />
//             {/* <SiBmw className="text-6xl md:text-8xl" /> */}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }


// This one
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { SiAccuweather, SiAdobephotoshop, SiAirbnb, SiBmw, SiIntel } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaWalkieTalkie } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

gsap.registerPlugin();

export function BrandsSection() {
  const container = useRef<HTMLDivElement>(null);
  const [logos, setLogos] = useState<number[]>([0, 1, 2, 3]); // Initial 4 logos indices

  const logoSet = [
    [<SiIntel className="text-6xl md:text-8xl" />],
    [<SiBmw className="text-6xl md:text-8xl" />],
    [<BsTwitterX className="text-6xl md:text-8xl" />],
    [<FaFacebook className="text-6xl md:text-8xl" />],
    [<FaWalkieTalkie className="text-6xl md:text-8xl" />],
    [<SiAccuweather className="text-6xl md:text-8xl" />],
    [<SiAirbnb className="text-6xl md:text-8xl" />],
    [<SiAdobephotoshop className="text-6xl md:text-8xl" />],
  ];

  useEffect(() => {
    // GSAP for the logos animation
    const items = container.current?.querySelectorAll(".logo-container");
    if (!items) return;

    // Reset the positions and set initial values for animation
    gsap.set(items, { opacity: 0, scale: 0.5, x: 0, y: 0 });

    items.forEach((item, index) => {
      let entrance = { opacity: 0, x: 0, y: 0 };
      let exit = { opacity: 0, x: 0, y: 0, scale: 0 };

      switch (index % 3) {
        case 0:
          entrance = { opacity: 1, x: 0, y: 100 }; // Enter from bottom
          exit = { x: 100, y: 0, opacity: 1, scale: 1 }; // Exit to the right
          break;

        case 1:
          entrance = { opacity: 1, x: 100, y: 0 }; // Enter from right
          exit = { y: 100, x: 0, opacity: 1, scale: 1 }; // Exit to the bottom
          break;

        case 2:
          entrance = { opacity: 1, x: 0, y: -100 }; // Enter from top
          exit = { x: -100, y: 0, opacity: 1, scale: 1 }; // Exit to the left
          break;
      }

      // Animate the logos in (entering the container)
      gsap.fromTo(item, entrance, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        stagger: 0.2, // Slight stagger to make the entrance smooth and progressive
        ease: "power3.out", // Ease in and out for smoother transitions
        // ease: "steps(4, end)", // Ease in and out for smoother transitions
      });

      // Animate the logos out (exiting the container)
      gsap.to(item, {
        ...exit,
        opacity: 0,
        scale: 0,
        duration: 1.2, // Slower exit for smoother transition
        delay: 4, // Delay before starting exit animation
        ease: "power3.in", // Ease out for smooth exit
        // ease: "steps(4, end)", // Ease in and out for smoother transitions
      });
    });

    // Animation for the title
    const title = container.current?.querySelector("h1");
    if (!title) return;
    gsap.set(title, { x: -100, opacity: 0 });
    gsap.to(title, {
      x: 0,
      opacity: 1,
      duration: 4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: `top ${window.innerHeight - 100}px`,
        end: `bottom ${window.innerHeight}px`,
        scrub: true,
        markers: false,
      },
    });
  }, [logos]);

  useEffect(() => {
    // Function to switch logos every few seconds
    const interval = setInterval(() => {
      setLogos((prev) => {
        const nextSet = (prev[0] + 4) % logoSet.length;
        return [nextSet, nextSet + 1, nextSet + 2, nextSet + 3].map(i => i % logoSet.length);
      });
    }, 5000); // Change logos every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section ref={container} className="h-full">
      <h1 className="col-span-1 sticky bg-new-blue px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium top-20 self-start z-2">
        <span>Event sponsors</span>
      </h1>
      <ul className="flex justify-evenly items-center h-64">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="logo-container">
            <div className="logo flex justify-center items-center h-32 w-32">
              {logoSet[logos[i]] ? logoSet[logos[i]].map((Logo, index) => (
                <div key={index}>{Logo}</div>
              )) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BrandsSection;
