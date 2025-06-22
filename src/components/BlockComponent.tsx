import { useRef } from "react";
import ModalContent from "./ModalContent";
import Dialog from "./Dialog";

type BlockComponentProps = {
  title: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string; // Optional className prop
  url?: string; // Optional URL prop for the link
  content: string; // Content to be displayed in the modal
} & React.HTMLAttributes<HTMLDivElement>; // Spread other props

export default function BlockComponent({
  title,
  modalOpen,
  setModalOpen,
  className = "",
  url, // Optional URL prop for the link
  content,
  ...props // Spread other props
}: BlockComponentProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div {...props}>
      <Dialog
        dialogOpen={modalOpen}
        setDialogOpen={setModalOpen}
        buttonRef={buttonRef}
      >
        <ModalContent
          setModalOpen={setModalOpen}
          title={title}
          content={content}
          link={url}
        />
      </Dialog>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setModalOpen(true)}
        className={`
        bg-all-black border-white border-4 flex items-center justify-center ${className} 
        w-24 h-24 p-4 hover:cursor-pointer`}
      >
        <span
          className={`text-white text-center text-[${Math.max(
            12,
            Math.min(24, 100 / title.length)
          )}px]`}
        >
          {title}
        </span>
      </button>
    </div>
  );
}
