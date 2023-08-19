import { ComponentMeta, ComponentStory } from "@storybook/react";
import AboutPage from "./AboutPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const AboutPageStory: ComponentMeta<typeof AboutPage> = {
  title: "pages/AboutPage",
  decorators: [StoreDecorator({})],
  component: AboutPage,
};
export default AboutPageStory;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
