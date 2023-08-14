import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
// import avatar from "shared/assets/test/storybook_avatar.jpg";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";

const ProfileCardStory: ComponentMeta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  args: {
    data: {
      username: "admin",
      first: "Иван",
      lastname: "Ненастоящий",
      age: 35,
      country: Country.Russia,
      city: "Комсомольск-на-Амуре",
      currency: Currency.RUB,
      avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    },
  },
};
export default ProfileCardStory;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const WithError = Template.bind({});
WithError.args = { error: "err" };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
