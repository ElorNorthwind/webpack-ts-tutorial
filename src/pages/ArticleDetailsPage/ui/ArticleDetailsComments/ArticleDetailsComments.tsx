import { FC, Suspense, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentList } from "@/entities/Comment";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";

interface ArticleDetailsCommentsProps {
  id?: string;
  className?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch],
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack max gap={"16"} className={classNames("", {}, [className])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text size="l" title={t("Комментарии")} />}
          off={<TextDeprecated size={TextSize.L} title={t("Комментарии")} />}
        />
        <Suspense fallback={t("Загрузка")}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  },
);
