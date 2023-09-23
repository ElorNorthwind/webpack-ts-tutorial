import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileCard } from "./ProfileCard";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

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
      avatar: "",
    },
  },
};
export default ProfileCardStory;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});

export const Redesigned = Template.bind({});
Redesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const WithError = Template.bind({});
WithError.args = { error: "err" };
