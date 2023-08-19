import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRole } from "@/entities/User";

const AvatarDropdownStory: ComponentMeta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  decorators: [
    StoreDecorator({
      user: { authData: { roles: [UserRole.ADMIN], avatar: "https://i.imgur.com/lzpIrMo.png" } },
    }),
  ],
};
export default AvatarDropdownStory;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
