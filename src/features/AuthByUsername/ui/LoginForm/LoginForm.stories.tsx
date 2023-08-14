import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import LoginForm from "./LoginForm";

const LoginFormStory: ComponentMeta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
};
export default LoginFormStory;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ loginForm: { username: "vasili", password: "123" } })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ loginForm: { username: "vasili", password: "123" } }),
];
