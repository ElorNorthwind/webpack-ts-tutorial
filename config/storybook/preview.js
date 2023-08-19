import { addDecorator } from "@storybook/react";
import { Theme } from "../../src/shared/const/theme";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SuspenceDecorator } from "../../src/shared/config/storybook/SuspenceDecorator/SuspenceDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenceDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
