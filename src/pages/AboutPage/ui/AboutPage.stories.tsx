import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const AboutPageStory: ComponentMeta<typeof AboutPage> = {
  title: "pages/AboutPage",
  decorators: [StoreDecorator({})],
  component: AboutPage,
};
export default AboutPageStory;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
