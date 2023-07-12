import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

const ArticlesPageFiltersStory: ComponentMeta<typeof ArticlesPageFilters> = {
  title: "shared/ArticlesPageFilters",
  component: ArticlesPageFilters,
};
export default ArticlesPageFiltersStory;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
