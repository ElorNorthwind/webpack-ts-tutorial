import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarImg from "@/shared/assets/test/storybook_avatar.jpg";
import { Avatar } from "./Avatar";

const AvatarStory: ComponentMeta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  args: { size: 150, src: AvatarImg },
};
export default AvatarStory;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
