import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import TransitionLink from "./TransitionLink";

gsap.registerPlugin(useGSAP);

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Method to close the menu with a full smooth animation
  const safeCloseMenuWithAnimation = (onCloseComplete?: () => void) => {
    if (menuRef.current && backdropRef.current && menuLinksRef.current) {
      const links = menuLinksRef.current.children;

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          // Close menu state after all animations
          closeMenu();
          if (onCloseComplete) onCloseComplete();
        },
      });

      tl.to(links, {
        y: 30,
        opacity: 0,
        scale: 0.95,
        stagger: { each: 0.05, from: "end" },
        duration: 0.3,
      })
        .to(menuRef.current, { x: "100%", opacity: 0, duration: 0.5 }, "-=0.2")
        .to(
          backdropRef.current,
          {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              if (backdropRef.current)
                backdropRef.current.style.display = "none";
            },
          },
          "-=0.3"
        );
    } else {
      closeMenu();
      if (onCloseComplete) onCloseComplete();
    }
  };

  useGSAP(
    () => {
      if (menuRef.current && backdropRef.current && menuLinksRef.current) {
        const links = menuLinksRef.current.children;
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (isMenuOpen) {
          // Opening animation
          gsap.set(links, { y: 30, opacity: 0, scale: 0.95 });

          tl.set(backdropRef.current, { display: "block", opacity: 0 })
            .to(backdropRef.current, { opacity: 0.5, duration: 0.3 }, 0)
            .set(menuRef.current, { x: "100%", opacity: 0 })
            .to(menuRef.current, { x: "0%", opacity: 1, duration: 0.5 }, 0)
            .to(
              links,
              {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 0.5,
              },
              "-=0.3"
            );
        }
        // Closing is fully handled in safeCloseMenuWithAnimation
      }
    },
    { dependencies: [isMenuOpen] }
  );

  return (
    <nav className="bg-all-black shadow-md fixed top-0 left-0 w-full mb-16">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <TransitionLink href="/" label="BLACK ALPACA" />

        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" aria-hidden="true" />
          ) : (
            <FaBars className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <TransitionLink
            href="/"
            label="Home"
            className="block py-2 px-4 text-white hover:text-primary transition duration-300"
          />
          <TransitionLink
            href="/about"
            label="About"
            className="block py-2 px-4 text-white hover:text-primary transition duration-300"
          />
        </div>
      </div>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black opacity-0 hidden lg:hidden"
        style={{ zIndex: 40 }}
        onClick={() => safeCloseMenuWithAnimation()}
      ></div>

      {/* Full-screen mobile menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-new-red shadow-lg transform translate-x-full opacity-0 lg:hidden"
        style={{ zIndex: 50 }}
      >
        <div
          ref={menuLinksRef}
          className="flex flex-col items-center justify-center h-full space-y-8 px-6"
        >
          <TransitionLink
            href="/"
            label="Home"
            className="text-3xl text-white hover:text-all-black  transition duration-300"
            underlineColorClass="bg-all-black"
            closeClick={(onCloseComplete) =>
              safeCloseMenuWithAnimation(onCloseComplete)
            }
          />
          <TransitionLink
            href="/about"
            label="About"
            className="text-3xl text-white hover:text-all-black  transition duration-300"
            underlineColorClass="bg-all-black"
            closeClick={(onCloseComplete) =>
              safeCloseMenuWithAnimation(onCloseComplete)
            }
          />
        </div>
      </div>
    </nav>
  );
}
