import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SiIntel } from "react-icons/si";

gsap.registerPlugin(useGSAP);

export function BrandsSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll("li");
      if (!items) return;
      gsap.set(items, { opacity: 0, scale: 0.5 });
      gsap.to(items, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: container.current,
          start: `top ${window.innerHeight - 50}px`,
          end: `bottom ${window.innerHeight}px`,
          scrub: true,
          markers: false,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <h1 className="col-span-1 bg-new-blue px-4 md:px-8 py-3 md:py-5 mt-20 w-fit h-fit text-all-black font-medium top-20 self-start z-2">
        <span>Event sponsors</span>
      </h1>
      <ul className="flex justify-evenly items-center h-64">
        {[...Array(4)].map((_, i) => (
          <li key={i}>
            <SiIntel className="text-8xl" />
          </li>
        ))}
      </ul>
    </section>
  );
}
