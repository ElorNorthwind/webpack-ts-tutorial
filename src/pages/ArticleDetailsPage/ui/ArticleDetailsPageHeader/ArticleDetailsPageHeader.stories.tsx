import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticleDetailsPageHeaderStory: ComponentMeta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  decorators: [StoreDecorator({})],
};
export default ArticleDetailsPageHeaderStory;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
