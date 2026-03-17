import { useEffect, type PropsWithChildren } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { useModalContext } from "./ModalContext";

export const ModalWindow = ({
  children,
  confirmLabel,
}: PropsWithChildren<{
  confirmLabel: string;
}>) => {
  const { closeModal } = useModalContext();

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [closeModal]);

  return (
    <Card>
      {children}
      <div className="flex justify-end">
        <Button onSubmit={closeModal}>{confirmLabel}</Button>
      </div>
    </Card>
  );
};
