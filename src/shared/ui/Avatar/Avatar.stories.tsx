import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import AvatarImg from "@/shared/assets/test/storybook_avatar.jpg";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Avatar } from "./Avatar";

const AvatarStory: ComponentMeta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  args: { size: 150, src: AvatarImg },
};
export default AvatarStory;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
