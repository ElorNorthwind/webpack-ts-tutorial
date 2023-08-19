import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";

const AddCommentFormStory: ComponentMeta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  args: {
    onSendComment: action("onSendComment"),
  },
  decorators: [StoreDecorator({})],
};
export default AddCommentFormStory;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
