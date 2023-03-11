import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
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

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
