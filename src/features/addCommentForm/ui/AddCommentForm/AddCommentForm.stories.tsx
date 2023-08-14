import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
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

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
