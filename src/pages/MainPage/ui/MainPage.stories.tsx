import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainPage from "./MainPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const MainPageStory: ComponentMeta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  decorators: [StoreDecorator({})],
};
export default MainPageStory;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
