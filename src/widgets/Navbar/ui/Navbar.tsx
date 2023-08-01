import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { HStack } from "shared/ui/Stack";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvaliable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} title="Мамкогул 3000" theme={TextTheme.INVERTED} />
        <AppLink
          className={cls.createBtn}
          to={RoutePaths.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("Создать статью")}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
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
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text className={cls.appName} title="Мамкогул 3000" theme={TextTheme.INVERTED} />
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </header>
  );
});
