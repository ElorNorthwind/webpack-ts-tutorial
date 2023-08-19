import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StarRaiting } from "./StarRaiting";

const StarRaitingStory: ComponentMeta<typeof StarRaiting> = {
  title: "shared/StarRaiting",
  component: StarRaiting,
};
export default StarRaitingStory;

const Template: ComponentStory<typeof StarRaiting> = (args) => <StarRaiting {...args} />;

export const Normal = Template.bind({});
