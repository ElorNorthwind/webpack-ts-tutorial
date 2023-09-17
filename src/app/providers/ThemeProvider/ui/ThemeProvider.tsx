import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { useJsonSettings } from "@/entities/User";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInitiated, setThemeInitiated] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT);

  useEffect(() => {
    if (!isThemeInitiated && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInitiated(true);
      document.body.className = theme;
    }
  }, [defaultTheme, isThemeInitiated, theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
