import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Page } from "./Page";

const PageStory: ComponentMeta<typeof Page> = {
  title: "widget/Page",
  component: Page,
  decorators: [StoreDecorator({})],
};
export default PageStory;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
