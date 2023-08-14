import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";

const AppLinkStory: ComponentMeta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    theme: {
      control: "inline-radio",
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
      defaultValue: "none",
    },
  },
  args: { to: "/", children: "Link" },
};
export default AppLinkStory;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
