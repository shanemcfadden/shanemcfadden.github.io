import { createContext, useContext } from "react";

export const ModalContext = createContext<{
  closeModal: () => void;
  openModal: (modalId: string) => void;
  isModalOpen: (modalId: string) => boolean;
}>({
  isModalOpen: () => false,
  openModal: () => {},
  closeModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
