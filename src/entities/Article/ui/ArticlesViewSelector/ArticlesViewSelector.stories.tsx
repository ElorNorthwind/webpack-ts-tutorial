import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticlesViewSelector } from "./ArticlesViewSelector";

const ArticlesViewSelectorStory: ComponentMeta<typeof ArticlesViewSelector> = {
  title: "entities/Article/ArticlesViewSelector",
  component: ArticlesViewSelector,
};
export default ArticlesViewSelectorStory;

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => (
  <ArticlesViewSelector {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
