import { FC, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { Dropdown as DropdownDeprecated } from "@/shared/ui/deprecated/Popups";
import { useTranslation } from "react-i18next";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { ToggleFeatures } from "@/shared/lib/features";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Dropdown } from "@/shared/ui/redesigned/Popups";

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

  const items = [
    ...(isAdminPanelAvaliable
      ? [
          {
            content: t("Админка"),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t("Профиль"),
      href: getRouteProfile(authData.id),
    },
    {
      content: t("Выйти"),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames(cls.avatarDropdown, {}, [className])}
          items={items}
          trigger={<Avatar size={40} className={cls.avatar} src={authData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames(cls.avatarDropdown, {}, [className])}
          items={items}
          trigger={
            <HStack>
              <TextDeprecated text={authData.username} theme={TextTheme.INVERTED} />
              <AvatarDeprecated
                size={32}
                className={cls.avatar}
                src={authData.avatar}
                fallbackInverted={true}
              />
            </HStack>
          }
        />
      }
    />
  );
};
