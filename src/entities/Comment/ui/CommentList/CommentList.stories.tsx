import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentList } from "./CommentList";

const CommentListStory: ComponentMeta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  args: {
    comments: [
      {
        id: "1",
        text: "Коммент",
        user: { id: "1", username: "admin", avatar: "https://i.imgur.com/lzpIrMo.png" },
      },
      {
        id: "2",
        text: "Еще коммент!",
        user: { id: "1", username: "user", avatar: "https://i.imgur.com/mDOPMHl.jpeg" },
      },
    ],
  },
};
export default CommentListStory;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
export const Loading = Template.bind({});
Loading.args = { isLoading: true };
export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
