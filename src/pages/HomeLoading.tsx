import { HeroBlocks } from "../components/sections/HeroSections";
import LoadingAlpaca from "../components/LoadingAlpaca";

export default function Home() {
  return (
    <>
      {/* Sección hero responsive */}
      <section className="flex flex-col justify-center md:flex-row  ">
        {/* Bloque 1 */}
        <div className="flex-1 flex items-center justify-center bg-black ">
          <HeroBlocks />
        </div>

        {/* Bloque 2 */}
        <div className="flex-1 flex items-center justify-center bg-black ">
          <LoadingAlpaca />
        </div>
      </section>
    </>
  );
}
