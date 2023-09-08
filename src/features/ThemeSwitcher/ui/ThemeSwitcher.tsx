import { memo, useCallback } from "react";
import ThemeThinIconDeprecated from "@/shared/assets/icons/theme_thin.svg";
import ThemeIcon from "@/shared/assets/icons/redesigned/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          onClick={onToggleHandler}
          className={classNames(cls.themeSwitcher, {}, [className])}
        >
          <IconDeprecated Svg={ThemeThinIconDeprecated} width={40} height={40} inverted />
          {/* <ThemeThinIcon className={cls.themeIconThin} /> */}
        </ButtonDeprecated>
      }
    />
  );
});
