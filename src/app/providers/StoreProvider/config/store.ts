import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { EnhancedStore } from "@reduxjs/toolkit/dist/configureStore";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema): EnhancedStore {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;
  return store;
}

// export const store = configureStore({
//   reducer: {},
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
