import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticleRating from "./ArticleRating";

const ArticleRatingStory: ComponentMeta<typeof ArticleRating> = {
  title: "shared/ArticleRating",
  component: ArticleRating,
};
export default ArticleRatingStory;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
