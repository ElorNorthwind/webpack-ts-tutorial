import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";

const ButtonStory: ComponentMeta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    theme: {
      control: "inline-radio",
      options: [
        "none",
        ButtonTheme.CLEAR,
        ButtonTheme.OUTLINE,
        ButtonTheme.BACKGROUND,
        ButtonTheme.BACKGROUND_INVERTED,
      ],
      defaultValue: "none",
    },
    size: {
      control: "inline-radio",
      options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL],
      defaultValue: ButtonSize.M,
    },
    square: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: { children: "Text" },
};
export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
