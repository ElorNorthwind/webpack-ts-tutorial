import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import MainPage from "./MainPage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const MainPageStory: ComponentMeta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  decorators: [StoreDecorator({})],
};
export default MainPageStory;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
