import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
// import { NavigateOptions, To } from "react-router-dom";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { scrollSaveReducer } from "features/ScrollSave";
import { rtkApi } from "shared/api/rtkApi";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  // navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    // navigate,
  };
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>, // ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
