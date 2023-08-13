import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { ReducersList } from "@/shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { profileReducer } from "@/features/EditableProfileCard/testing";
import { articlesPageReducer } from "@/pages/ArticlesPage/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";

const defaultAsyndReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyndReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
