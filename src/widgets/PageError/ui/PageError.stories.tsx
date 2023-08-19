import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PageError } from "./PageError";
import { PaddingDecorator } from "@/shared/config/storybook/PaddingDecorator/PaddingDecorator";

const PageErrorStory: ComponentMeta<typeof PageError> = {
  title: "widget/PageError",
  component: PageError,
  decorators: [PaddingDecorator(0)],
};
export default PageErrorStory;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Normal = Template.bind({});
