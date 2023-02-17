import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (
  props: LangSwitcherProps
) => {
  const { t, i18n } = useTranslation();
  const { className, short } = props;

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? "Яз" : "Язык")}
    </Button>
  );
};
