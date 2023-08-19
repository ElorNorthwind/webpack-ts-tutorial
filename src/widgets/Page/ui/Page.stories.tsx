import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Page } from "./Page";

const PageStory: ComponentMeta<typeof Page> = {
  title: "widget/Page",
  component: Page,
  decorators: [StoreDecorator({})],
};
export default PageStory;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
