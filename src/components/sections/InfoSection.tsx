import { useRef, useEffect } from "react";
import BlackAlpaca from "../SVG/BlackAlpaca";
import CloudSVG from "../SVG/CloudSVG";
import BlockComponent from "../BlockComponent";
import useCursorPosition from "../../hooks/useCursorPositionAlpaca";
import useModalStates from "../../hooks/useModalStates";
import useInfoScrollTrigger from "../../hooks/useInfoScrollTrigger";
import { gsap } from "gsap";
import useBlockAnimation from "../../hooks/useBlockAnimation";

const InfoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const alpacaRef = useRef<SVGSVGElement>(null);
  const blockContainerRef = useRef<HTMLDivElement>(null);
  const { modalStates, setModalOpen } = useModalStates();
  const cursorX = useCursorPosition(containerRef, modalStates);

  useInfoScrollTrigger(containerRef);
  useBlockAnimation(blockContainerRef);

  const handleAlpacaClick = () => {
    const allModalsClosed = Object.values(modalStates).every(
      (isOpen) => !isOpen
    );
    if (allModalsClosed && alpacaRef.current) {
      gsap.set(alpacaRef.current, { y: 0 });
      gsap.to(alpacaRef.current, {
        y: -100,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const allModalsClosed = Object.values(modalStates).every(
      (isOpen) => !isOpen
    );
    if (allModalsClosed && alpacaRef.current) {
      gsap.to(alpacaRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [modalStates]);

  return (
    <section ref={sectionRef} onClick={handleAlpacaClick}>
      <div
        id="sky"
        className="flex flex-col justify-between h-lvh bg-all-black relative overflow-hidden"
        ref={containerRef}
      >
        <div id="clouds" className="absolute top-0 left-0 w-full h-auto">
          <CloudSVG
            className="absolute w-1/6 h-auto cloud"
            style={{ top: "70px", left: "1%" }}
          />
          <CloudSVG
            className="absolute w-1/7 h-auto cloud"
            style={{ top: "10px", left: "30%" }}
          />
          <CloudSVG
            className="absolute w-1/8 h-auto cloud"
            style={{ top: "150px", left: "60%" }}
          />
          <CloudSVG
            className="absolute w-1/7 h-auto cloud"
            style={{ top: "1px", left: "85%" }}
          />
        </div>

        <div
          id="blocks"
          className="flex items-center justify-center h-screen space-x-40 "
          ref={blockContainerRef}
        >
          <BlockComponent
            className="block"
            title="Become a Sponsor"
            modalOpen={modalStates["Become a Sponsor"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Become a Sponsor", isOpen as boolean)
            }
            content="Adipisicing eu amet est enim magna proident culpa velit et dolore ullamco. Voluptate minim minim est eiusmod ut cillum commodo aute fugiat eu ad. Dolore id fugiat ut qui amet dolor irure do. Et magna exercitation ad voluptate id quis dolor Lorem ipsum aliqua. Velit cillum consequat deserunt nisi ipsum veniam in. Excepteur aliqua occaecat elit deserunt esse non irure elit elit ullamco laboris aliqua."
            url="https://example.com/sponsor"
          />
          <BlockComponent
            className="block"
            title="Submit a Talk"
            modalOpen={modalStates["Submit a Talk"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Submit a Talk", isOpen as boolean)
            }
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            url="https://example.com/submit-talk"
          />
          <BlockComponent
            className="block"
            title="Submit Villages"
            modalOpen={modalStates["Submit Villages"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Submit Villages", isOpen as boolean)
            }
            content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            url="https://example.com/submit-villages"
          />
          <BlockComponent
            className="block"
            title="Become a Volunteer"
            modalOpen={modalStates["Become a Volunteer"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Become a Volunteer", isOpen as boolean)
            }
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            url="https://example.com/become-volunteer"
          />
          <BlockComponent
            className="block"
            title="Get Tickets"
            modalOpen={modalStates["Get Tickets"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Get Tickets", isOpen as boolean)
            }
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            url="https://example.com/get-tickets"
          />
        </div>

        <BlackAlpaca
          ref={alpacaRef}
          className="w-48 absolute mb-14 fill-white"
          style={{
            left: `${cursorX}px`,
            bottom: 0,
            transform: "translateX(-50%)",
          }}
        />

        <div
          id="ground"
          className="bg-all-black border-t-2 border-dashed h-16 w-full absolute bottom-0"
        ></div>
      </div>
    </section>
  );
};

export default InfoSection;
