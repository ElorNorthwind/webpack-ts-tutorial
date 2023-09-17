import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { useJsonSettings } from "@/entities/User";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInitiated, setThemeInitiated] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

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
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
