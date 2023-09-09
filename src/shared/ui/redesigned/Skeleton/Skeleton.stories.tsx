import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const SkeletonStory: ComponentMeta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  args: {
    height: "1rem",
    width: "100%",
  },
};
export default SkeletonStory;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});

export const Round = Template.bind({});
Round.args = {
  height: 100,
  width: 100,
  border: "50%",
};
