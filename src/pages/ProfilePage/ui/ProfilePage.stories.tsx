import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";

const ProfilePageStory: ComponentMeta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};
export default ProfilePageStory;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        first: "Иван",
        lastname: "Ненастоящий",
        age: 35,
        country: Country.Russia,
        city: "Комсомольск-на-Амуре",
        currency: Currency.RUB,
        avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      },
      readonly: true,
    },
  }),
];

export const Editable = Template.bind({});
Editable.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        first: "Иван",
        lastname: "Ненастоящий",
        age: 35,
        country: Country.Russia,
        city: "Комсомольск-на-Амуре",
        currency: Currency.RUB,
        avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
      },
      readonly: false,
    },
  }),
];
