import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticlesPage from "./ArticlesPage";

const ArticlesPageStory: ComponentMeta<typeof ArticlesPage> = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
};
export default ArticlesPageStory;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
