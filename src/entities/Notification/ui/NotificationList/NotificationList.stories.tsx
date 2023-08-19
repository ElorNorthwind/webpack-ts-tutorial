import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import withMock from "storybook-addon-mock";

const NotificationListStory: ComponentMeta<typeof NotificationList> = {
  title: "entities/Notifications/NotificationList",
  component: NotificationList,
  decorators: [StoreDecorator({}), withMock],
  parameters: {
    mockData: [
      {
        url: `${__API__}notifications`,
        method: "GET",
        status: 200,
        response: [
          {
            id: "1",
            title: "Blah blah",
            description: "Lorem ipsem",
          },
          {
            id: "2",
            title: "Blah blah",
            description: "Lorem ipsem",
          },
        ],
      },
    ],
  },
};
export default NotificationListStory;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
