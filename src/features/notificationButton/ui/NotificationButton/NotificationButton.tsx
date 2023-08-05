import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import notificationIcon from "shared/assets/icons/notifications.svg";
import { NotificationList } from "entities/Notification";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(
  (props: NotificationButtonProps) => {
    const { className } = props;

    return (
      <Popover
        trigger={
          <Button theme={ButtonTheme.CLEAR} className={cls.iconBtn}>
            <Icon Svg={notificationIcon} inverted />
          </Button>
        }
        className={classNames(cls.notificationButton, {}, [className])}
        placement="bottom"
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    );
  },
);
