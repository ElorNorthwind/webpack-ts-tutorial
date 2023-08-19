import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidebar } from "./Sidebar";

const ButtonStory: ComponentMeta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
};
export default ButtonStory;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({ user: { authData: {} } })];

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({ user: {} })];
