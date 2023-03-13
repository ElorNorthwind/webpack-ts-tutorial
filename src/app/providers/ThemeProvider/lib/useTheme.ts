import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const themes = Object.values(Theme);
    let newTheme: Theme;

    if (theme) {
      newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    } else {
      newTheme = Theme.LIGHT;
    }

    // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    // document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
