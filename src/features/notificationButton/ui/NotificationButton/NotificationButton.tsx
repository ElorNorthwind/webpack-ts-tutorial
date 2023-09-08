import { FC, memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { Popover } from "@/shared/ui/deprecated/Popups";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon } from "@/shared/ui/deprecated/Icon";
import notificationIcon from "@/shared/assets/icons/notifications.svg";
import { NotificationList } from "@/entities/Notification";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";

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
        <Icon Svg={notificationIcon} inverted width={24} height={24} />
      </Button>
    );

    return (
      <>
        {isMobile ? (
          <>
            {notificationBtn}
            <Drawer isOpen={isOpen} onClose={toggleClose} closeOnClick={true}>
              <NotificationList />
            </Drawer>
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
