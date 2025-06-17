import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import TransitionLink from "./TransitionLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  let openTl: GSAPTimeline | null = null;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const safeCloseMenuWithAnimation = (onCloseComplete?: () => void) => {
    if (!menuRef.current || !backdropRef.current || !menuLinksRef.current) {
      setIsMenuOpen(false);
      onCloseComplete?.();
      return;
    }
    const links = Array.from(menuLinksRef.current.children);
    gsap.killTweensOf([menuRef.current, backdropRef.current, links]);
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setIsMenuOpen(false);
        onCloseComplete?.();
        backdropRef.current!.style.display = "none";
      },
    });
    tl.to(links, {
      y: 30,
      opacity: 0,
      scale: 0.95,
      stagger: { each: 0.05, from: "start" },
      duration: 0.25,
    })
      .to(menuRef.current, { x: "100%", opacity: 0, duration: 0.3 }, "-=0.2")
      .to(backdropRef.current, { opacity: 0, duration: 0.2 }, "-=0.3");
  };

  useGSAP(
    () => {
      if (
        !isMenuOpen ||
        !menuRef.current ||
        !backdropRef.current ||
        !menuLinksRef.current
      )
        return;

      const links = Array.from(menuLinksRef.current.children);
      gsap.set(backdropRef.current, { display: "block", opacity: 0 });
      gsap.set(menuRef.current, { x: "100%", opacity: 0 });
      gsap.set(links, { y: 30, opacity: 0, scale: 0.95 });

      if (openTl) openTl.kill();

      openTl = gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(backdropRef.current, { opacity: 0.5, duration: 0.2 }, 0)
        .to(menuRef.current, { x: "0%", opacity: 1, duration: 0.5 }, 0)
        .to(
          links,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: { each: 0.08, from: "end", ease: "power2.out" },
            duration: 0.2,
          },
          "-=0.3"
        );
    },
    { dependencies: [isMenuOpen] }
  );

  return (
    <nav className="bg-all-black shadow-md fixed top-0 left-0 w-full border-b-2 border-white z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <TransitionLink href="/" svg />

        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <FaBars className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {["/"].map((href, i) => (
            <TransitionLink
              key={i}
              href={href}
              label={
                href === "/"
                  ? "Home"
                  : href.slice(1).replace(/^\w/, (c) => c.toUpperCase())
              }
              className="block py-2 px-4 text-white hover:text-primary transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black opacity-0 hidden lg:hidden"
        style={{ zIndex: 40 }}
        onClick={() => safeCloseMenuWithAnimation()}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-new-red shadow-lg transform translate-x-full opacity-0 lg:hidden"
        style={{ zIndex: 50 }}
      >
        <div
          ref={menuLinksRef}
          className="flex flex-col items-center justify-center h-full space-y-8 px-6"
        >
          {/* Links  */}
          {["/"].map((href, i) => (
            <TransitionLink
              key={i}
              href={href}
              label={
                href === "/"
                  ? "Home"
                  : href.slice(1).replace(/^\w/, (c) => c.toUpperCase())
              }
              className="text-3xl text-white hover:text-all-black transition duration-300"
              underlineColorClass="bg-all-black"
              closeClick={(onCloseComplete) =>
                safeCloseMenuWithAnimation(onCloseComplete)
              }
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
