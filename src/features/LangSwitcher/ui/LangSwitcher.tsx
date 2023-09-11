import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import cls from "./LangSwitcher.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Button } from "@/shared/ui/redesigned/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const { className, short } = props;

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button className={className} variant="clear" onClick={toggle}>
          {t(short ? "Яз" : "Язык")}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames(cls.langSwitcher, {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {t(short ? "Яз" : "Язык")}
        </ButtonDeprecated>
      }
    />
  );
});
