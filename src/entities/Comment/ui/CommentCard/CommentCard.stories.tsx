import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";

const CommentCardStory: ComponentMeta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  args: {
    comment: {
      id: "1",
      text: "Коммент",
      user: { id: "1", username: "admin", avatar: "https://i.imgur.com/lzpIrMo.png" },
    },
  },
};
export default CommentCardStory;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
export const Loading = Template.bind({});
Loading.args = { isLoading: true };
export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
