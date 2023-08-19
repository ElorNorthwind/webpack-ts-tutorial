import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const ThemeSwitcherStory: ComponentMeta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
  args: {},
};
export default ThemeSwitcherStory;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
