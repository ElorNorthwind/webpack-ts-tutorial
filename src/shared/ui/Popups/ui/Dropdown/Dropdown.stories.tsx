import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

const DropdownStory: ComponentMeta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
  args: {
    trigger: <Button>Нажми меня</Button>,
    items: [
      { content: "first item" },
      { content: "secont item" },
      { content: "third item", unavailable: true },
      { content: "forth item" },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "8px" }}>
        <Story />
      </div>
    ),
  ],
};
export default DropdownStory;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
