type Props = {
  imgSrc?: string;
  dateString?: string;
  titleEvent?: string;
  nameSpeaker?: string;
  lastNameSpeaker?: string;
  hourPlace?: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export default function SpeakersCard({
  imgSrc,
  dateString,
  titleEvent,
  nameSpeaker,
  hourPlace,
  lastNameSpeaker,
  className = "",
  ref,
}: Props) {
  const splitTitle = titleEvent?.split(" ");
  const part1 = splitTitle
    ?.slice(0, Math.ceil(splitTitle.length / 2))
    .join(" "); // Primera mitad
  const part2 = splitTitle?.slice(Math.ceil(splitTitle.length / 2)).join(" "); // Segunda mitad
  return (
    <>
      <div ref={ref} className={`flex  ${className}  `}>
        {/* Columna de los bloques de color */}
        <div className="flex flex-col justify-between  ">
          {/* Nombre del evento */}
          <div className="flex items-center justify-center bg-new-red py-3 flex-grow">
            <p className="[writing-mode:vertical-rl] [text-orientation:sideways] rotate-180 text-base md:text-lg lg:text-xl">
              blkalpa.conf
            </p>
          </div>
          {/* Fecha */}
          <div className="flex items-center justify-center bg-primary text-all-black py-3 flex-grow">
            <p className="[writing-mode:vertical-lr] [text-orientation:sideways] rotate-180 text-base md:text-lg lg:text-xl">
              ▴ 18-20.11.2025
            </p>
          </div>
          {/* Auditorio */}
          <div className="flex items-center justify-center bg-new-blue text-all-black py-3 flex-grow">
            <p className="[writing-mode:vertical-rl] [text-orientation:sideways] rotate-180 text-base md:text-lg lg:text-xl">
              ⬤ auditorio universitario
            </p>
          </div>
        </div>

        {/* Foto del orador y detalles */}
        <div className="flex flex-col justify-between w-80">
          <div
            className="bg-cover bg-center flex flex-col object-cover size-full"
            style={{
              backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
            }}
          >
            {/* Fecha del evento */}
            <div className="bg-primary text-center text-all-black w-44 pt-5 ml-4 pl-0 pr-6">
              <p className="text-2xl">{dateString}</p>
            </div>

            {/*info del orador */}
            <div className="flex flex-col justify-end mt-auto mb-4 b">
              {/* Nombre y Apellido del orador */}
              <div className="flex flex-col mx-auto mr-6">
                <div className="bg-all-black text-white w-28 mr-12">
                  <p className="text-xl">{nameSpeaker}</p>
                </div>
                <div className="bg-all-black text-white w-28 ml-12">
                  <p className="text-xl">{lastNameSpeaker}</p>
                </div>
              </div>

              {/* Título del evento */}
              <div className="flex flex-col items-center justify-center mx-auto ">
                <div className="items-center justify-center flex flex-col space-y-0">
                  <div className="bg-new-red w-56 text-center pl-6">
                    <p className="text-base leading-none">{part1}</p>
                  </div>
                  <div className="bg-new-red w-fit text-center pr-8">
                    <p className="text-base leading-none">{part2}</p>
                  </div>
                </div>
              </div>
              <div className="bg-new-blue w-fit mx-3 flex justify-start text-all-black">
                <p className="text-base pr-16">{hourPlace}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-all-black flex-1">
              <p className="text-white text-2xl leading-none">blackalpaca</p>
            </div>
            <div className="bg-all-black flex-1">
              <p className="text-white text-start text-2xl leading-none">
                conferencia estudiantil de ciberseguridad
              </p>
            </div>
          </div>
        </div>

        {/* Columna de los bloques de color */}
        <div className="flex flex-col justify-between ">
          {/* Tipo */}
          <div className="flex items-center justify-center bg-new-blue text-all-black py-3 flex-grow">
            <p className="[writing-mode:vertical-rl] [text-orientation:sideways] text-base md:text-lg lg:text-xl">
              talleres.charlas.practicas
            </p>
          </div>
          {/* País */}
          <div className="flex items-center justify-center bg-new-red py-3 flex-grow">
            <p className="[writing-mode:vertical-rl] [text-orientation:sideways] text-base md:text-lg lg:text-xl">
              lima, perú
            </p>
          </div>
          {/* Contacto */}
          <div className="flex items-center justify-center bg-primary text-all-black py-3 flex-grow">
            <p className="[writing-mode:vertical-lr] [text-orientation:sideways] text-base md:text-lg lg:text-xl">
              ig@blkalpa2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
