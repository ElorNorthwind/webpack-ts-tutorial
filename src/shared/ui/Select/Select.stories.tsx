import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Select } from "./Select";

const SelectStory: ComponentMeta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  args: {
    label: "label goes here",
    options: [
      { value: "1", content: "One" },
      { value: "2", content: "Two" },
    ],
    value: "1",
  },
};
export default SelectStory;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
