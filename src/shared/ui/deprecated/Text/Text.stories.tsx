import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextTheme } from "./Text";

const TextStory: ComponentMeta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  argTypes: {
    theme: {
      control: "inline-radio",
      options: [TextTheme.PRIMARY, TextTheme.ERROR],
      defaultValue: TextTheme.PRIMARY,
    },
  },
  args: { title: "Title goes here", text: "Lorem ipsum, yopti" },
};
export default TextStory;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
