import React, { ReactNode, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const contentClickHandler = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const onKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onKeydown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [className])}
        onClick={closeHandler}
      >
        <div className={cls.content} onClick={contentClickHandler}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
