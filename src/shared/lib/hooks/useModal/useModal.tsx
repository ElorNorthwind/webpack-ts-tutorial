import { useCallback, useEffect, useState } from "react";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
}

export function useModal({ onClose, isOpen }: UseModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isOpen, onKeydown]);

  return {
    isMounted,
    close,
  };
}
