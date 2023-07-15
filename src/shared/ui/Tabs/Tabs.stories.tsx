import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs } from "./Tabs";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { action } from "@storybook/addon-actions";

const TabsStory: ComponentMeta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
  args: {
    tabs: [
      { value: "tab 1", content: "Tab 1" },
      { value: "tab 2", content: "Tab 2" },
      { value: "tab 3", content: "Tab 3" },
    ],
    value: "tab 2",
    onTabClick: action("onTableClick"),
  },
};
export default TabsStory;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
