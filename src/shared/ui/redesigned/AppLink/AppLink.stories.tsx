import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppLink } from "./AppLink";

const AppLinkStory: ComponentMeta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  args: { to: "/", children: "Link" },
};
export default AppLinkStory;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Normal = Template.bind({});
