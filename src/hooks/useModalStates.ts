import { useState } from "react";

const useModalStates = () => {
  const [modalStates, setModalStates] = useState<Record<string, boolean>>({});

  const setModalOpen = (title: string, isOpen: boolean) => {
    setModalStates((prev) => ({
      ...prev,
      [title]: isOpen,
    }));
  };

  return { modalStates, setModalOpen };
};

export default useModalStates;
