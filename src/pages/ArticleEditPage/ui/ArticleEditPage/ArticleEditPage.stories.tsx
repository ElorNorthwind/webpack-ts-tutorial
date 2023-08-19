import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleEditPage from "./ArticleEditPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const ArticleEditPageStory: ComponentMeta<typeof ArticleEditPage> = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  decorators: [StoreDecorator({})],
};
export default ArticleEditPageStory;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
