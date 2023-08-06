import { FC, ReactNode, memo, useEffect, useState } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Drawer.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  closeOnClick?: boolean;
}

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
  const { className, children, isOpen = false, onClose, lazy = false, closeOnClick = true } = props;
  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme, "app_drawer"])}>
        <Overlay onClick={onClose} />
        <div className={cls.content} style={{ pointerEvents: closeOnClick ? "none" : "auto" }}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
