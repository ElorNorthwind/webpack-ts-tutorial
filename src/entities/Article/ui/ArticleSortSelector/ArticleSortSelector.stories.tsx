import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleSortSelector } from "./ArticleSortSelector";

const ArticleSortSelectorStory: ComponentMeta<typeof ArticleSortSelector> = {
  title: "entities/Article/ArticleSortSelector",
  component: ArticleSortSelector,
};
export default ArticleSortSelectorStory;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
