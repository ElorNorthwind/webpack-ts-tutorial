import { FC, memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { Popover as PopoverDeprecated } from "@/shared/ui/deprecated/Popups";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import notificationIconDeprecated from "@/shared/assets/icons/notifications.svg";
import notificationIcon from "@/shared/assets/icons/redesigned/notification.svg";
import { NotificationList } from "@/entities/Notification";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Popover } from "@/shared/ui/redesigned/Popups";

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Icon Svg={notificationIcon} clickable onClick={toggleClose} />}
        off={
          <ButtonDeprecated theme={ButtonTheme.CLEAR} className={cls.iconBtn} onClick={toggleClose}>
            <IconDeprecated Svg={notificationIconDeprecated} inverted width={24} height={24} />
          </ButtonDeprecated>
        }
      />
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
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Popover
                trigger={notificationBtn}
                className={classNames(cls.notificationButton, {}, [className])}
                placement="bottom"
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
            off={
              <PopoverDeprecated
                trigger={notificationBtn}
                className={classNames(cls.notificationButton, {}, [className])}
                placement="bottom"
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
          />
        )}
      </>
    );
  },
);
