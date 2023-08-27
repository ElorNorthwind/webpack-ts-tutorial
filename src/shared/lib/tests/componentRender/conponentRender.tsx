import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line fsd-lorans-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
// eslint-disable-next-line fsd-lorans-plugin/layer-imports
import "@/app/styles/index.scss";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
  padding?: string;
}

export interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const { route = "/", initialState, asyncReducers, theme = Theme.LIGHT, padding } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`} style={{ padding }}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
): ReturnType<typeof render> {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
