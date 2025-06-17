import { HeroBlocks } from "../components/sections/HeroSections";
import LoadingAlpaca from "../components/LoadingAlpaca";

export default function Home() {
  return (
    <>
      {/* Sección hero responsive */}
      <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-black md:flex-row">
        {/* Bloque 1 */}
        <div className="flex-1 flex justify-center">
          <HeroBlocks />
        </div>

        {/* Bloque 2 */}
        <div className="flex-1 flex items-center justify-center m-5 md:m-0 w-full md:w-auto">
          <LoadingAlpaca />
        </div>
      </section>
    </>
  );
}
