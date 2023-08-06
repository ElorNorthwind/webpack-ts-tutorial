import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
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

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
