import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Page } from "widgets/Page/Page";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import cls from "./ArticleDetailsPage.module.scss";
import {
  articleDetailsPageRecomendationsReducer,
  getArticleRecomendations,
} from "../../model/slices/articleDetailsPageRecomendationsSlice";
import { getArticleRecomendationsIsLoading } from "../../model/selectors/recommendations";
import fetchArticleRecommendations from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecomendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Text title={t("Статья не найдена")} theme={TextTheme.ERROR} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t("Рекомендованные статьи")} className={cls.commentTitile} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target={"_blank"}
        />
        <Text size={TextSize.L} title={t("Комментарии")} className={cls.commentTitile} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
