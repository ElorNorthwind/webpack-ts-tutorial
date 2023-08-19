import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

const InputStory: ComponentMeta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  args: { placeholder: "Text", value: "Bla bla bla" },
};
export default InputStory;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
