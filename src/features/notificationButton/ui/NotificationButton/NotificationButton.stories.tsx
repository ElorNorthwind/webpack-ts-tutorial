import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { NotificationButton } from "./NotificationButton";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import withMock from "storybook-addon-mock";

const NotificationButtonStory: ComponentMeta<typeof NotificationButton> = {
  title: "features/NotificationButton",
  component: NotificationButton,
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
export default NotificationButtonStory;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
