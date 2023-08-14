import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RatingCard } from "./RatingCard";

const RatingCardStory: ComponentMeta<typeof RatingCard> = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
};
export default RatingCardStory;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
