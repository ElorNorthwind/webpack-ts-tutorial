import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

const ButtonStory: ComponentMeta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  args: { children: "Text" },
};
export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
