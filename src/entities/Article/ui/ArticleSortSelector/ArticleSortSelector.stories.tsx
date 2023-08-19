import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleSortSelector } from "./ArticleSortSelector";

const ArticleSortSelectorStory: ComponentMeta<typeof ArticleSortSelector> = {
  title: "entities/Article/ArticleSortSelector",
  component: ArticleSortSelector,
};
export default ArticleSortSelectorStory;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
