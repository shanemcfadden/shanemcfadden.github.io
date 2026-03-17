import { type PropsWithChildren } from "react";
import { useModalContext } from "./ModalContext";
import { ModalWindow } from "./ModalWindow";

export const Modal = ({
  children,
  confirmLabel = "OK",
  id,
}: PropsWithChildren<{
  confirmLabel?: string;
  id: string;
}>) => {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <>
      {isModalOpen(id) && (
        <>
          <div
            className="w-screen h-screen fixed top-0 left-0 bg-overlay opacity-50 z-100"
            onClick={closeModal}
          />
          <div className="m-auto fixed top-0 left-0 right-0 bottom-0 h-fit max-h-9/10 w-9/10 max-w-4xl z-110">
            <ModalWindow confirmLabel={confirmLabel}>{children}</ModalWindow>
          </div>
        </>
      )}
    </>
  );
};
