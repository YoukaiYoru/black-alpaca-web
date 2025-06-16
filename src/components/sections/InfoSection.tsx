import { useRef, useEffect } from "react";
import BlackAlpaca from "../SVG/BlackAlpaca";
import CloudSVG from "../SVG/CloudSVG";
import BlockComponent from "../BlockComponent";
import useCursorPosition from "../../hooks/useCursorPositionAlpaca";
import useModalStates from "../../hooks/useModalStates";
import useScrollTrigger from "../../hooks/useInfoScrollTrigger";
import { gsap } from "gsap";

const InfoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const alpacaRef = useRef<SVGSVGElement>(null);

  const { modalStates, setModalOpen } = useModalStates();
  const cursorX = useCursorPosition(containerRef, modalStates);

  useScrollTrigger(containerRef);

  const handleAlpacaClick = () => {
    const allModalsClosed = Object.values(modalStates).every(
      (isOpen) => !isOpen
    );
    if (allModalsClosed && alpacaRef.current) {
      gsap.set(alpacaRef.current, { y: 0 });
      gsap.to(alpacaRef.current, {
        y: -210,
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
        className="flex flex-col justify-between h-lvh bg-new-blue relative overflow-hidden"
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

        <div className="flex items-center justify-center h-screen space-x-40">
          <BlockComponent
            title="Become a Sponsor"
            modalOpen={modalStates["Become a Sponsor"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Become a Sponsor", isOpen as boolean)
            }
          />
          <BlockComponent
            title="Submit a Talk"
            modalOpen={modalStates["Submit a Talk"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Submit a Talk", isOpen as boolean)
            }
          />
          <BlockComponent
            title="Submit Villages"
            modalOpen={modalStates["Submit Villages"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Submit Villages", isOpen as boolean)
            }
          />
          <BlockComponent
            title="Become a Volunteer"
            modalOpen={modalStates["Become a Volunteer"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Become a Volunteer", isOpen as boolean)
            }
          />
          <BlockComponent
            title="Get Tickets"
            modalOpen={modalStates["Get Tickets"] || false}
            setModalOpen={(isOpen) =>
              setModalOpen("Get Tickets", isOpen as boolean)
            }
          />
        </div>

        <BlackAlpaca
          ref={alpacaRef}
          className="w-48 absolute mb-14"
          style={{
            left: `${cursorX}px`,
            bottom: 0,
            transform: "translateX(-50%)",
          }}
        />

        <div
          id="ground"
          className="bg-primary h-16 w-full absolute bottom-0"
        ></div>
      </div>
    </section>
  );
};

export default InfoSection;
