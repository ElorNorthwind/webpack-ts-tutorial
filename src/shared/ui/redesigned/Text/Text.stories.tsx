import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

const TextStory: ComponentMeta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  args: { title: "Title goes here", text: "Lorem ipsum, yopti" },
};
export default TextStory;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
