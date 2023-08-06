import { useTheme } from "@/app/providers/ThemeProvider";
import { memo } from "react";
import ThemeThinIcon from "@/shared/assets/icons/theme_thin.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { className } = props;

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      <ThemeThinIcon className={cls.themeIconThin} />
    </Button>
  );
});
