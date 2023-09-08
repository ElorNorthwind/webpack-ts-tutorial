import { FC, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { Dropdown } from "@/shared/ui/deprecated/Popups";
import { useTranslation } from "react-i18next";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { useSelector } from "react-redux";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { ToggleFeatures } from "@/shared/lib/features";

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
      ]}
      trigger={
        <HStack>
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Avatar
                size={32}
                className={cls.avatar}
                src={authData.avatar}
                fallbackInverted={true}
              />
            }
            off={
              <>
                <Text text={authData.username} theme={TextTheme.INVERTED} />
                <Avatar
                  size={32}
                  className={cls.avatar}
                  src={authData.avatar}
                  fallbackInverted={true}
                />
              </>
            }
          />
        </HStack>
      }
    />
  );
};
