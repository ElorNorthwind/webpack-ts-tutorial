import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

const EditableProfileCardStory: ComponentMeta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
} 
export default EditableProfileCardStory;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;
export const Light = Template.bind({});