import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

const EditableProfileCardHeaderStory: ComponentMeta<typeof EditableProfileCardHeader> = {
  title: "shared/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
};
export default EditableProfileCardHeaderStory;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
