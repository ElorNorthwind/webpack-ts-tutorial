import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Navbar } from "./Navbar";
import { PaddingDecorator } from "@/shared/config/storybook/PaddingDecorator/PaddingDecorator";

const ButtonStory: ComponentMeta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  decorators: [PaddingDecorator(0)],
};
export default ButtonStory;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];

export const LoggendIn = Template.bind({});
LoggendIn.decorators = [StoreDecorator({ user: { authData: {} } })];
