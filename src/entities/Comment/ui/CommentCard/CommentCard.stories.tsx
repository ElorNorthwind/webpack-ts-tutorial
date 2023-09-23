import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentCard } from "./CommentCard";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

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

export const Normal = Template.bind({});
export const Redesigned = Template.bind({});
Redesigned.decorators = [NewDesignDecorator];
export const Loading = Template.bind({});
Loading.args = { isLoading: true };
