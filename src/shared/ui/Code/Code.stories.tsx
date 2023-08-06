import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Code } from "./Code";

const CodeStory: ComponentMeta<typeof Code> = {
  title: "shared/Code",
  component: Code,
  args: {
    text: `  import { ComponentMeta, ComponentStory } from "@storybook/react";
  import { Theme } from "app/providers/ThemeProvider";
  import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
  import { Code } from "./Code";`,
  },
};
export default CodeStory;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
