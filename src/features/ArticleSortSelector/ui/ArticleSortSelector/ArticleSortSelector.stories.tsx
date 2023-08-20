import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

const ArticleSortSelectorStory: ComponentMeta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
} 
export default ArticleSortSelectorStory;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;
export const Normal = Template.bind({});