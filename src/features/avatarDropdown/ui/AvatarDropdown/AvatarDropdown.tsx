import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { Dropdown } from "shared/ui/Popups";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvaliable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.avatarDropdown, {}, [className])}
      items={[
        ...(isAdminPanelAvaliable
          ? [
              {
                content: t("Админка"),
                href: RoutePaths.admin_panel,
              },
            ]
          : []),
        {
          content: t("Профиль"),
          href: RoutePaths.profile + authData.id,
        },
        {
          content: t("Выйти"),
          onClick: onLogout,
        },
      ]}
      trigger={
        <HStack>
          <Text text={authData.username} theme={TextTheme.INVERTED} />
          <Avatar size={32} className={cls.avatar} src={authData.avatar} />
        </HStack>
      }
    />
  );
};
