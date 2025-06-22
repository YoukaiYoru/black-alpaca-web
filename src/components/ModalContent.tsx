import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  link?: string;
  textLink?: string;
};

export default function ModalContent({
  setModalOpen,
  title,
  content,
  link,
  textLink = "Learn More", // Default text for the link button
}: Props) {
  const splitTitle = title?.split(" ");
  const part1 = splitTitle
    ?.slice(0, Math.ceil(splitTitle.length / 2))
    .join(" "); // Primera mitad
  const part2 = splitTitle?.slice(Math.ceil(splitTitle.length / 2)).join(" ");

  return (
    <div className="text-center text-white flex flex-row h-full bg-all-black">
      <div
        className="w-14  bg-[url('/src/assets/banner.svg')]  bg-contain"
        style={{ aspectRatio: "1/ 5" }}
      />
      <div className="flex flex-col w-fit">
        <div className="flex justify-between items-center mb-4">
          <div className="m-2">
            <div className="mr-5 bg-new-red ">
              <p className="text-xl md:text-3xl font-medium text-start text-white">
                {part1}
              </p>
            </div>
            <div className="ml-5 bg-primary ">
              <p className="text-xl md:text-3xl font-medium text-end text-all-black">
                {part2}
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="text-white px-6 py-2 rounded"
          >
            <FaRegWindowClose fontSize={50} className="hover:cursor-pointer" />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-wrap px-10 text-xs md:text-base lg:text-lg text-center">
            {content}
          </p>
          <button className="bg-new-red hover:bg-new-red-dark text-white m-5 py-2 px-4 transition-colors duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {textLink}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
