import { ArticleView } from "@/entities/Article";
import { getArticlesPageView } from "../../../../model/selectors/articlesPageSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { articlesPageActions } from "../../../..//model/slices/articlesPageSlice";

export function useArticleView() {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  return { view, onChangeView };
}
