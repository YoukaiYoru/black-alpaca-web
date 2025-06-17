import { HeroBlocks } from "../components/sections/HeroSections";
import LoadingAlpaca from "../components/LoadingAlpaca";

export default function Home() {
  return (
    <>
      {/* Sección hero responsive */}
      <section className="flex flex-col items-center h-screen justify-center md:h-[calc(100vh-64px)] bg-black md:flex-row">
        {/* Bloque 1 */}
        <div className="flex-1 flex items-center justify-center m-5 md:m-0">
          <HeroBlocks />
        </div>

        {/* Bloque 2 */}
        <div className="flex-1 flex items-center justify-center  m-5 md:m-0">
          <LoadingAlpaca />
        </div>
      </section>
    </>
  );
}
