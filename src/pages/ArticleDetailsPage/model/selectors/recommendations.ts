import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleRecomendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error;
export const getArticleRecomendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading;
