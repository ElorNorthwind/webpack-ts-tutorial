import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Page } from "./Page";
import { PaddingDecorator } from "@/shared/config/storybook/PaddingDecorator/PaddingDecorator";

const PageStory: ComponentMeta<typeof Page> = {
  title: "widget/Page",
  component: Page,
  decorators: [StoreDecorator({}), PaddingDecorator(0)],
};
export default PageStory;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
