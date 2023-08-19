import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleInfiniteList } from "./ArticleInfiniteList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticleInfiniteListStory: ComponentMeta<typeof ArticleInfiniteList> = {
  title: "pages/ArticlesPage/ArticleInfiniteList",
  component: ArticleInfiniteList,
  decorators: [StoreDecorator({})],
};
export default ArticleInfiniteListStory;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
