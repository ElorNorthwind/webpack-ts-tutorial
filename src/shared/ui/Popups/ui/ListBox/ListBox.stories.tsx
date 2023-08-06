import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ListBox } from "./ListBox";

const ListBoxStory: ComponentMeta<typeof ListBox> = {
  title: "shared/ListBox",
  component: ListBox,
  args: {
    defaultValue: "Выберите значение",
    value: undefined,
    items: [
      { content: "Опция 1", value: "option1", unavailable: false },
      { content: "Опция 2", value: "option2", unavailable: false },
      { content: "Опция 3", value: "option3", unavailable: true },
      { content: "Опция 4", value: "option4", unavailable: false },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "8px" }}>
        <Story />
      </div>
    ),
  ],
};
export default ListBoxStory;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
