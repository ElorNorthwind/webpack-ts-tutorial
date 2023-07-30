import { rtkApi } from "shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleReccomendationsList: build.query({
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticlesReccomendationsList =
  recommendationsApi.useGetArticleReccomendationsListQuery;
