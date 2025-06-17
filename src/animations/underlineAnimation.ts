import gsap from "gsap";

export const animateUnderlineIn = (element: HTMLElement) => {
  gsap.to(element, {
    scaleX: 1,
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
  });
};

export const animateUnderlineOut = (element: HTMLElement) => {
  gsap.to(element, {
    scaleX: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.in",
  });
};
