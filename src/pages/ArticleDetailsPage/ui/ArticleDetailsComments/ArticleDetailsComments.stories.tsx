import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticleDetailsCommentsStory: ComponentMeta<typeof ArticleDetailsComments> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  decorators: [StoreDecorator({})],
};
export default ArticleDetailsCommentsStory;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  <ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
