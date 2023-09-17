import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RatingCard } from "@/entities/Rating";
import { useGetArticleRating, useRateArticle } from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { ToggleFeatures } from "@/shared/lib/features";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? "" });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? "",
          articleId,
          rate: starCount,
          feedback,
        });
      } catch (e) {
        // insert proper error handling here :(
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handleRateArticle(starCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starCount: number) => {
      handleRateArticle(starCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Skeleton width={"100%"} height={120} />}
        off={<SkeletonDeprecated width={"100%"} height={120} />}
      />
    );
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t("Оцените статью")}
      feedbackText={data?.[0]?.feedback}
      feedbackTitle={t("Оставьте свой комментарий, мы обязательно его проигрорируем")}
      hasFeedback
      rate={rating?.rate}
    />
  );
});

export default ArticleRating;
