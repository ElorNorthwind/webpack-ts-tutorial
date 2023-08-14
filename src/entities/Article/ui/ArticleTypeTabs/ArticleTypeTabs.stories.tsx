import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

const ArticleTypeTabsStory: ComponentMeta<typeof ArticleTypeTabs> = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
};
export default ArticleTypeTabsStory;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
