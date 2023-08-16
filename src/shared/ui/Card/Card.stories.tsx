import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
// eslint-disable-next-line fsd-lorans-plugin/path-checker
import { Text } from "@/shared/ui/Text";
import { Card } from "./Card";

const CardStory: ComponentMeta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  args: { children: <Text title={"Что я делал вчера вечером?"} text={"Мамок ваших гулял"} /> },
};
export default CardStory;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
