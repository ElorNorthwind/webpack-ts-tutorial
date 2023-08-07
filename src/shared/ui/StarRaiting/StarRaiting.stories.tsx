import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StarRaiting } from "./StarRaiting";

const StarRaitingStory: ComponentMeta<typeof StarRaiting> = {
  title: "shared/StarRaiting",
  component: StarRaiting,
};
export default StarRaitingStory;

const Template: ComponentStory<typeof StarRaiting> = (args) => <StarRaiting {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
