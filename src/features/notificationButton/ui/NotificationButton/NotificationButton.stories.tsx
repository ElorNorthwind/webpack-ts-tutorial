import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationButton } from "./NotificationButton";

const NotificationButtonStory: ComponentMeta<typeof NotificationButton> = {
  title: "shared/NotificationButton",
  component: NotificationButton,
};
export default NotificationButtonStory;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
