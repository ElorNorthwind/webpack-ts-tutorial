import { memo, useCallback } from "react";
import ThemeThinIcon from "@/shared/assets/icons/theme_thin.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";
import { Icon } from "@/shared/ui/deprecated/Icon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  const { className } = props;

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleHandler}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      <Icon Svg={ThemeThinIcon} width={40} height={40} inverted />
      {/* <ThemeThinIcon className={cls.themeIconThin} /> */}
    </Button>
  );
});
