import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const ArticleRecommendationsListStory: ComponentMeta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
} 
export default ArticleRecommendationsListStory;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;
export const Light = Template.bind({});