import gsap from "gsap";

export const animatePageIn = () => {
  const element = document.getElementById("transition-element");
  if (element) {
    gsap
      .timeline()
      .set(element, { xPercent: 0 })
      .to(element, { xPercent: 100, duration: 1, ease: "power2.out" });
  }
};

export const animatePageOut = (navigate: () => void) => {
  const element = document.getElementById("transition-element");
  if (element) {
    gsap
      .timeline()
      .set(element, { xPercent: 100 })
      .to(element, {
        xPercent: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: navigate,
      });
  } else {
    navigate(); // fallback
  }
};
