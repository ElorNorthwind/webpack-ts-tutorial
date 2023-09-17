import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

export const initAuthData = createAsyncThunk<User, undefined, ThunkConfig<string>>(
  "user/initAuthData",
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue("Отсутвует текущий пользователь");
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.features?.isAppRedesigned ? "new" : "old",
      );
      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Не удалось сохранить настройки");
    }
  },
);
