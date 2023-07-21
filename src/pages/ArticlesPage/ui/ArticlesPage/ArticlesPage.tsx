import { FC, memo, useCallback, useRef } from "react";
// import { useTranslation } from "react-i18next";
import { ArticleList } from "entities/Article";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page/Page";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import cls from "./ArticlesPage.module.scss";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <div className={cls.articlesPage}>Oops...</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.articlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleList className={cls.list} articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
