import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";

const ButtonStory: ComponentMeta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  //   argTypes: {
  //     className: {
  //       control: "boolean",
  //       defaultValue: false,
  //     },
  //   },
};
export default ButtonStory;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
