import { HeroBlocks } from "../components/sections/HeroSections";
import { SpeakersSection } from "../components/sections/SpeakersSections";
import { BrandsSection } from "../components/sections/BrandsSections";

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
    <div>
      <section className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
        <div className="flex-1 h-full flex items-center justify-center bg-black">
          <HeroBlocks />
        </div>
        <div className="flex-1 h-full flex items-center justify-center bg-white" />
      </section>

      <SpeakersSection speakers={speakersData} />
      <BrandsSection />
    </div>
  );
}
