import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flex } from "./Flex";

const FlexStory: ComponentMeta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
};
export default FlexStory;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  direction: "row",
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </>
  ),
};
