import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";
import { Overlay } from "../Overlay/Overlay";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onKeydown]);

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
