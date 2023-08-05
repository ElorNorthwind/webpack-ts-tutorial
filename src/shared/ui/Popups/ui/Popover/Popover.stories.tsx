import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Popover } from "./Popover";

const PopoverStory: ComponentMeta<typeof Popover> = {
  title: "shared/Popover",
  component: Popover,
};
export default PopoverStory;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
