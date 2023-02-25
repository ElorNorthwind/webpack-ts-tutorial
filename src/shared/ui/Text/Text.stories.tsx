import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextTheme } from "./Text";

const TextStory: ComponentMeta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  argTypes: {
    theme: {
      control: "inline-radio",
      options: [TextTheme.PRIMARY, TextTheme.ERROR],
      defaultValue: TextTheme.PRIMARY,
    },
  },
  args: { title: "Title goes here", text: "Lorem ipsum, yopti" },
};
export default TextStory;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
