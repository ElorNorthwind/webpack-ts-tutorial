import { addDecorator } from "@storybook/react";
import { Theme } from "../../src/shared/const/theme";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { SuspenceDecorator } from "../../src/shared/config/storybook/SuspenceDecorator/SuspenceDecorator";
import { PaddingDecorator } from "../../src/shared/config/storybook/PaddingDecorator/PaddingDecorator";
// import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  themes: {
    default: "light",
    list: [
      { name: "light", class: ["app", Theme.LIGHT], color: "#e7e7e7" },
      { name: "dark", class: ["app", Theme.DARK], color: "#2e2e71" },
      { name: "green", class: ["app", Theme.GREEN], color: "#70a287" },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenceDecorator);
addDecorator(PaddingDecorator());
// addDecorator(ThemeDecorator(Theme.LIGHT));
