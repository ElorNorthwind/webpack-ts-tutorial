import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Currency } from "../../model/types/currency";
import { CurrencySelect } from "./CurrencySelect";

const CurrencySelectStory: ComponentMeta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  args: {
    value: Currency.RUB,
  },
};
export default CurrencySelectStory;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Normal = Template.bind({});
