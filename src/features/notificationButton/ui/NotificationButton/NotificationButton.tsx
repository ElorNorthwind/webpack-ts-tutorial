import { FC, memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { Popover } from "@/shared/ui/Popups";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import notificationIcon from "@/shared/assets/icons/notifications.svg";
import { NotificationList } from "@/entities/Notification";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { AnimationProvider } from "@/shared/lib/compomemts/AnimationProvider";
// import { BrowserView, MobileView } from "react-device-detect";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(
  (props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const toggleClose = useCallback(() => {
      setIsOpen((lastState) => !lastState);
    }, []);

    const notificationBtn = (
      <Button theme={ButtonTheme.CLEAR} className={cls.iconBtn} onClick={toggleClose}>
        <Icon Svg={notificationIcon} inverted />
      </Button>
    );

    return (
      <>
        {isMobile ? (
          <>
            {notificationBtn}
            <AnimationProvider>
              <Drawer isOpen={isOpen} onClose={toggleClose} closeOnClick={true}>
                <NotificationList />
              </Drawer>
            </AnimationProvider>
          </>
        ) : (
          <Popover
            trigger={notificationBtn}
            className={classNames(cls.notificationButton, {}, [className])}
            placement="bottom"
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        )}
      </>
    );
  },
);
