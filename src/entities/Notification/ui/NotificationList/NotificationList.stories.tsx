import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import withMock from "storybook-addon-mock";

const NotificationListStory: ComponentMeta<typeof NotificationList> = {
  title: "enttities/Notifications/NotificationList",
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

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
