import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/test/storybook_avatar.jpg";
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
Light.decorators = [
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
        avatar,
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
        avatar,
      },
      readonly: false,
    },
  }),
];

export const Dark = Template.bind({});

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
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
        avatar,
      },
      readonly: true,
    },
  }),
];
