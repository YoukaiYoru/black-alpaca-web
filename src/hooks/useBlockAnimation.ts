import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useBlockAnimation = (
  blockContainerRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const blocks = blockContainerRef.current?.querySelectorAll(".block");

    if (blocks) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockContainerRef.current,
          start: "30% bottom",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
        },
      });

      blocks.forEach((block, index) => {
        tl.fromTo(
          block,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          index * 0.3
        );
      });
    }
  }, [blockContainerRef]);
};

export default useBlockAnimation;
