import { getUserAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { AppLink as ApplinkDeprecated, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import { getRouteArticleCreate } from "@/shared/const/router";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { ToggleFeatures } from "@/shared/lib/features";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Button } from "@/shared/ui/redesigned/Button";
import cls from "./Navbar.module.scss";

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
        on={
          <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <HStack gap={"4"} className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.navbar, {}, [className])}>
            <TextDeprecated
              className={cls.appName}
              title="Мамкогул 3000"
              theme={TextTheme.INVERTED}
            />
            <ApplinkDeprecated
              className={cls.createBtn}
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
            >
              {t("Создать статью")}
            </ApplinkDeprecated>
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
      on={
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
          <Button variant="clear" className={cls.links} onClick={onOpenModal}>
            {t("Войти")}
          </Button>
          <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </header>
      }
      off={
        <header className={classNames(cls.navbar, {}, [className])}>
          <TextDeprecated
            className={cls.appName}
            title="Мамкогул 3000"
            theme={TextTheme.INVERTED}
          />
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onOpenModal}
          >
            {t("Войти")}
          </ButtonDeprecated>
          <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
        </header>
      }
    />
  );
});
