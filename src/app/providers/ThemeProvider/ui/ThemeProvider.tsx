import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";
import { useJsonSettings } from "@/entities/User";

// (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [isThemeInitiated, setThemeInitiated] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInitiated) {
      setTheme(defaultTheme);
      setThemeInitiated(true);
    }
  }, [defaultTheme, isThemeInitiated]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
