import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar } from "./Navbar";

const ButtonStory: ComponentMeta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
};
export default ButtonStory;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const LightLoggendIn = Template.bind({});
LightLoggendIn.args = {};
LightLoggendIn.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
