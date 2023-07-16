import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticlesPageFiltersStory: ComponentMeta<typeof ArticlesPageFilters> = {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  decorators: [StoreDecorator({})],
};
export default ArticlesPageFiltersStory;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
