import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";

const ProfilePageStory: ComponentMeta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};
export default ProfilePageStory;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
