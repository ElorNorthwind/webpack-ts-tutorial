import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticleDetailsData } from "@/entities/Article/model/selectors/articleDetailsSelectors";
import { getUserAuthData } from "@/entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  "articleDetails/addCommentForArticle",
  async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("Неверные данные для сохранения коммментария");
    }

    try {
      const response = await extra.api.post<Comment>(`/comments`, {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка при сохранении комментария");
    }
  },
);
