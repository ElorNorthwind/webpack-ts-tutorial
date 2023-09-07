import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import cls from "./Navbar.module.scss";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { getRouteArticleCreate } from "@/shared/const/router";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { ToggleFeatures } from "@/shared/lib/features";
interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <header className={classNames(cls.navbar, {}, [className])}>
            <Text className={cls.appName} title="Мамкогул 3000" theme={TextTheme.INVERTED} />
            <AppLink
              className={cls.createBtn}
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
            >
              {t("Создать статью")}
            </AppLink>
            <HStack gap={"4"} className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        on={
          <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <HStack gap={"4"} className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <header className={classNames(cls.navbar, {}, [className])}>
          <Text className={cls.appName} title="Мамкогул 3000" theme={TextTheme.INVERTED} />
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
            {t("Войти")}
          </Button>
          <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </header>
      }
      on={
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
            {t("Войти")}
          </Button>
          <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </header>
      }
    />
  );
});
