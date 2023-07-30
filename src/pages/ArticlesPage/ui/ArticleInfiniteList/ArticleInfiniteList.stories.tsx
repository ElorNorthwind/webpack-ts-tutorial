import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

const ArticleInfiniteListStory: ComponentMeta<typeof ArticleInfiniteList> = {
  title: "pages/ArticlesPage/ArticleInfiniteList",
  component: ArticleInfiniteList,
};
export default ArticleInfiniteListStory;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  <ArticleInfiniteList {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
