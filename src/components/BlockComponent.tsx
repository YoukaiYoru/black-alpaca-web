import { useRef } from "react";
import ModalContent from "./ModalContent";
import Dialog from "./Dialog";

type BlockComponentProps = {
  title: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string; // Optional className prop
} & React.HTMLAttributes<HTMLDivElement>; // Spread other props

export default function BlockComponent({
  title,
  modalOpen,
  setModalOpen,
  className = "",
  ...props // Spread other props
}: BlockComponentProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      {...props}
      className={`bg-block h-40 w-40 border-all-black border-4 flex items-center justify-center ${className}`}
    >
      <Dialog
        dialogOpen={modalOpen}
        setDialogOpen={setModalOpen}
        buttonRef={buttonRef}
      >
        <ModalContent
          setModalOpen={setModalOpen}
          title="Modal Title"
          content="This is the modal content."
          buttonText="Close"
        />
      </Dialog>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setModalOpen(true)}
        className="flex items-center justify-center h-full w-full p-5"
      >
        <span className="text-white font-pixel">{title}</span>
      </button>
    </div>
  );
}
