import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";

const ModalStory: ComponentMeta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  args: { children: "Long long long modal text", isOpen: true },
};
export default ModalStory;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
