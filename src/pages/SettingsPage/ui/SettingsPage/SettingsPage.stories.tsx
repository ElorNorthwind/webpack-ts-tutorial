import { ComponentStory, ComponentMeta } from "@storybook/react";
import SettingsPage from "./SettingsPage";

const SettingsPageStory: ComponentMeta<typeof SettingsPage> = {
  title: "pages/SettingsPage",
  component: SettingsPage,
};
export default SettingsPageStory;

const Template: ComponentStory<typeof SettingsPage> = (args) => <SettingsPage {...args} />;
export const Normal = Template.bind({});
