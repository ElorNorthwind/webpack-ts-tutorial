import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticlesFilters } from "./ArticlesFilters";

const ArticlesFiltersStory: ComponentMeta<typeof ArticlesFilters> = {
  title: "shared/ArticlesFilters",
  component: ArticlesFilters,
};
export default ArticlesFiltersStory;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

export const Normal = Template.bind({});
