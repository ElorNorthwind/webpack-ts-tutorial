import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticlesViewSelector } from "./ArticlesViewSelector";

const ArticlesViewSelectorStory: ComponentMeta<typeof ArticlesViewSelector> = {
  title: "entities/Article/ArticlesViewSelector",
  component: ArticlesViewSelector,
};
export default ArticlesViewSelectorStory;

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => (
  <ArticlesViewSelector {...args} />
);

export const Normal = Template.bind({});
