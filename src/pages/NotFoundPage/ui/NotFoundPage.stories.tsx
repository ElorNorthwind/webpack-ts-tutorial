import { ComponentMeta, ComponentStory } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const NotFoundPageStory: ComponentMeta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  decorators: [StoreDecorator({})],
};
export default NotFoundPageStory;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Normal = Template.bind({});
