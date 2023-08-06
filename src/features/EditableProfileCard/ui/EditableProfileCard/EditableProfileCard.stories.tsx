import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const EditableProfileCardStory: ComponentMeta<typeof EditableProfileCard> = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  decorators: [StoreDecorator({})],
};
export default EditableProfileCardStory;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
);
export const Light = Template.bind({});
