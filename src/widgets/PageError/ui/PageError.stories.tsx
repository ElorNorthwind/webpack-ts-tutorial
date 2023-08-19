import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PageError } from "./PageError";

const PageErrorStory: ComponentMeta<typeof PageError> = {
  title: "widget/PageError",
  component: PageError,
};
export default PageErrorStory;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Normal = Template.bind({});
