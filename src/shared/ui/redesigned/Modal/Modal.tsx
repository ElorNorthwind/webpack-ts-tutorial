import React, { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { toggleFeatures } from "@/shared/lib/features";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { isMounted, close } = useModal({ onClose, isOpen });

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById("app") ?? document.body}>
      <div
        className={classNames(cls.modal, mods, [
          className,
          toggleFeatures({
            name: "isAppRedesigned",
            on: () => cls.modalNew,
            off: () => cls.modalOld,
          }),
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
