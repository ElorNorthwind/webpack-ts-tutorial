import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from "@/shared/ui/deprecated/Text";
import { ArticleList } from "@/entities/Article";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useArticlesReccomendationsList } from "../../api/articleRecommendationsApi";
import { toggleFeatures } from "@/shared/lib/features";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const {
    data: articles,
    isLoading,
    error,
  } = useArticlesReccomendationsList(
    toggleFeatures({ name: "isAppRedesigned", on: () => 3, off: () => 4 }),
  );
  const { t } = useTranslation();

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack className={classNames("", {}, [className])} data-testid={"ArticleRecommendationsList"}>
      <Text size={TextSize.L} title={t("Рекомендованные статьи")} className={""} />
      <ArticleList articles={articles} className={""} target={"_blank"} />
    </VStack>
  );
});
