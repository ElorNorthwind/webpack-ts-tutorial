import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from "@/shared/ui/Text";
import { ArticleList } from "@/entities/Article";
import { VStack } from "@/shared/ui/Stack";
import { useArticlesReccomendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { data: articles, isLoading, error } = useArticlesReccomendationsList(4);
  const { t } = useTranslation();

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack className={classNames("", {}, [className])}>
      <Text size={TextSize.L} title={t("Рекомендованные статьи")} className={""} />
      <ArticleList articles={articles} className={""} target={"_blank"} />
    </VStack>
  );
});
