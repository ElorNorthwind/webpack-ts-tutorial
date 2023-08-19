import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { PaddingDecorator } from "@/shared/config/storybook/PaddingDecorator/PaddingDecorator";

const ArticleDetailsPageHeaderStory: ComponentMeta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  decorators: [StoreDecorator({}), PaddingDecorator(0)],
};
export default ArticleDetailsPageHeaderStory;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
