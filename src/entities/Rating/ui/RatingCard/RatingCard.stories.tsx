import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RatingCard } from "./RatingCard";

const RatingCardStory: ComponentMeta<typeof RatingCard> = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
};
export default RatingCardStory;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
