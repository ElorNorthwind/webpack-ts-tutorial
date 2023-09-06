import { useContext } from "react";
import { Theme } from "@/shared/const/theme";
import { ThemeContext } from "../../../lib/context/ThemeContext";

interface useThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction: (theme: Theme) => void): void => {
    const themes = Object.values(Theme);
    let newTheme: Theme;

    if (theme) {
      newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    } else {
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    saveAction(newTheme);
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
