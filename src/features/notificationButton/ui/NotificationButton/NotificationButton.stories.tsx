import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationButton } from "./NotificationButton";

const NotificationButtonStory: ComponentMeta<typeof NotificationButton> = {
  title: "features/NotificationButton",
  component: NotificationButton,
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

export const Normal = Template.bind({});
