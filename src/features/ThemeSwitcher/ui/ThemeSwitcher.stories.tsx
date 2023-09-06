import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ThemeSwitcherStory: ComponentMeta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
  args: {},
  decorators: [StoreDecorator({})],
};
export default ThemeSwitcherStory;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
