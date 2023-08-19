import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticlesPageFiltersStory: ComponentMeta<typeof ArticlesPageFilters> = {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  decorators: [StoreDecorator({})],
};
export default ArticlesPageFiltersStory;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
