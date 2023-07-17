import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsPageRecomendationsReducer } from "./articleDetailsPageRecomendationsSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecomendationsReducer,
});
