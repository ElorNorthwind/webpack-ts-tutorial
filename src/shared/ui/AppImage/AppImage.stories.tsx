import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarImg from "@/shared/assets/test/storybook_avatar.jpg";
import { AppImage } from "./AppImage";

const AppImageStory: ComponentMeta<typeof AppImage> = {
  title: "shared/AppImage",
  component: AppImage,
  args: { src: AvatarImg },
};
export default AppImageStory;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
