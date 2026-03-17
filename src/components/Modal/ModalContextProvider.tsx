import { type PropsWithChildren, useCallback, useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const openModal = useCallback(
    (modalId: string) => setOpenModalId(modalId),
    [],
  );
  const closeModal = useCallback(() => setOpenModalId(null), []);

  const isModalOpen = useCallback(
    (modalId: string) => modalId === openModalId,
    [openModalId],
  );

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
