import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
};
