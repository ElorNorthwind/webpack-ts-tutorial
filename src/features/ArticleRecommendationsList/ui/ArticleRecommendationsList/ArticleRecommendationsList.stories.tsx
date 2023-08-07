import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "@/entities/Article";
import withMock from "storybook-addon-mock";

const article: Article = {
  id: "1",
  img: "https://i.imgur.com/lzpIrMo.png",
  createdAt: "20.01.2023",
  views: 123,
  user: { id: "1", username: "user" },
  blocks: [],
  type: [],
  title: "bla_bla",
  subtitle: "lorem ipsem",
};

const ArticleRecommendationsListStory: ComponentMeta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  decorators: [StoreDecorator({}), withMock],
  parameters: {
    mockData: [
      {
        url: `${__API__}articles?_limit=4`, // `${__API__}articles?_limit=4`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
          { ...article, id: "4" },
        ],
      },
    ],
  },
};
export default ArticleRecommendationsListStory;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
);
export const Light = Template.bind({});