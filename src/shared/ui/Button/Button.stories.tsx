import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, ThemeButton } from "./Button";

const ButtonStory: ComponentMeta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    theme: {
      control: "inline-radio",
      options: ["none", ThemeButton.CLEAR, ThemeButton.OUTLINE],
      defaultValue: "none",
    },
  },
  args: { children: "Text" },
};
export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
