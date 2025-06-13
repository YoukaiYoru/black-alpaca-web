import { HeroBlocks } from "../components/sections/HeroSections";
import { SpeakersSection } from "../components/sections/SpeakersSections";
import { BrandsSection } from "../components/sections/BrandsSections";
import InfoSection from "../components/sections/InfoSection";

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

  return (
    <div className="flex flex-col">
      {/* Sección hero responsive */}
      {/* <section className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-64px)] min-w-fit"> */}
      <section className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-64px)] w-[100vw]">
        {/* Bloque 1 */}
        {/* <div className="flex-1 flex items-center justify-center bg-black py-12 md:py-0"> */}
        <div className="flex-1 flex items-center justify-center bg-black p-6 md:p-0">
          <HeroBlocks />
        </div>

        {/* Bloque 2 */}
        <div className="flex-1 flex items-center justify-center bg-white py-12 md:py-0">
          {/* Puedes agregar contenido aquí o dejarlo vacío */}
        </div>
      </section>

      {/* Sección speakers */}
      <SpeakersSection speakers={speakersData} />

      {/* Sección marcas */}
      <BrandsSection />
      <InfoSection />
    </div>
  );
}
