import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticleDetailsPage from "./ArticleDetailsPage";

const ArticleDetailsPageStory: ComponentMeta<typeof ArticleDetailsPage> = {
  title: "shared/ArticleDetailsPage",
  component: ArticleDetailsPage,
};
export default ArticleDetailsPageStory;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
