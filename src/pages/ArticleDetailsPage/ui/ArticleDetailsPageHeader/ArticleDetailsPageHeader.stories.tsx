import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

const ArticleDetailsPageHeaderStory: ComponentMeta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailesPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
};
export default ArticleDetailsPageHeaderStory;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
