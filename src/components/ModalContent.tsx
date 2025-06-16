import React from "react";

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  buttonText: string;
};

export default function ModalContent({
  setModalOpen,
  title,
  content,
  buttonText,
}: Props) {
  return (
    <div className="text-center text-all-black">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{content}</p>
      <button
        onClick={() => setModalOpen(false)}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
}
