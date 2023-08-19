import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

const ArticleTypeTabsStory: ComponentMeta<typeof ArticleTypeTabs> = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
};
export default ArticleTypeTabsStory;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
