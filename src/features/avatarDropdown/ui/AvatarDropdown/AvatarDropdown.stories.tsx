import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AvatarDropdown } from "./AvatarDropdown";

const AvatarDropdownStory: ComponentMeta<typeof AvatarDropdown> = {
  title: "shared/AvatarDropdown",
  component: AvatarDropdown,
};
export default AvatarDropdownStory;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
