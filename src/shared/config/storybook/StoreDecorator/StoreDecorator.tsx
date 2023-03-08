import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyndReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyndReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
