import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleList } from "@/entities/Article";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
  (props: ArticleInfiniteListProps) => {
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
      return (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={"Oops"} />}
          off={<TextDeprecated text={"Oops"} />}
        />
      );
    }

    return (
      <ArticleList className={className} articles={articles} view={view} isLoading={isLoading} />
    );
  },
);
