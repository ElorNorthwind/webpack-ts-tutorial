import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Popover } from "./Popover";

const PopoverStory: ComponentMeta<typeof Popover> = {
  title: "shared/Popover",
  component: Popover,
};
export default PopoverStory;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
