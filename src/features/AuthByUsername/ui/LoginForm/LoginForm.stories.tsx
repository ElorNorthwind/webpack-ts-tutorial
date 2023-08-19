import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const LoginFormStory: ComponentMeta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  decorators: [StoreDecorator({ loginForm: { username: "vasili", password: "123" } })],
  args: {},
};
export default LoginFormStory;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
