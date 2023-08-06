import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationItem } from "./NotificationItem";

const NotificationItemStory: ComponentMeta<typeof NotificationItem> = {
  title: "shared/NotificationItem",
  component: NotificationItem,
};
export default NotificationItemStory;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
