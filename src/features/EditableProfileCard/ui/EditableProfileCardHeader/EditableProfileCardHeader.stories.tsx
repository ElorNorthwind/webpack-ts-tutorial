import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const EditableProfileCardHeaderStory: ComponentMeta<typeof EditableProfileCardHeader> = {
  title: "features/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
  decorators: [StoreDecorator({})],
};
export default EditableProfileCardHeaderStory;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
