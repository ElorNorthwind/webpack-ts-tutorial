import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from "./Loader";

const LoaderStory: ComponentMeta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  args: {},
};
export default LoaderStory;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
