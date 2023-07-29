import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ListBox } from "./ListBox";

const ListBoxStory: ComponentMeta<typeof ListBox> = {
  title: "shared/ListBox",
  component: ListBox,
};
export default ListBoxStory;

const Template: ComponentStory<typeof ListBox> = () => <ListBox />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
