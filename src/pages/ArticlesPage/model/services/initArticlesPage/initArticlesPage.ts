import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageIsInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageIsInited(getState());
    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
