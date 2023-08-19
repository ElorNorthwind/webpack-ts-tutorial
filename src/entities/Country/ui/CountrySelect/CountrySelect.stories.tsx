import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "../../model/types/country";
import { CountrySelect } from "./CountrySelect";

const CountrySelectStory: ComponentMeta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  args: {
    value: Country.Russia,
  },
};
export default CountrySelectStory;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Normal = Template.bind({});
