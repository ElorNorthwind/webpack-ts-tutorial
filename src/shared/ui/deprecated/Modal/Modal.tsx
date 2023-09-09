import React, { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Portal } from "../../redesigned/Portal/Portal";
import cls from "./Modal.module.scss";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};