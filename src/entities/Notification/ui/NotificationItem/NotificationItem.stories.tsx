import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const NotificationItemStory: ComponentMeta<typeof NotificationItem> = {
  title: "entities/Notifications/NotificationItem",
  component: NotificationItem,
  decorators: [StoreDecorator({})],
  args: {
    item: { id: "1", title: "blah", description: "lorem" },
  },
};
export default NotificationItemStory;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
