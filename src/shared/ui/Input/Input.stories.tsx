import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Input } from "./Input";
import { Theme } from "@/shared/const/theme";

const InputStory: ComponentMeta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  args: { placeholder: "Text", value: "Bla bla bla" },
};
export default InputStory;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
