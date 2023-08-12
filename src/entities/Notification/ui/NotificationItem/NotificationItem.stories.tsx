import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationItem } from "./NotificationItem";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const NotificationItemStory: ComponentMeta<typeof NotificationItem> = {
  title: "enttities/Notifications/NotificationItem",
  component: NotificationItem,
  decorators: [StoreDecorator({})],
  args: {
    item: { id: "1", title: "blah", description: "lorem" },
  },
};
export default NotificationItemStory;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
