import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import NotFoundPage from "./NotFoundPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const NotFoundPageStory: ComponentMeta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  decorators: [StoreDecorator({})],
};
export default NotFoundPageStory;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
