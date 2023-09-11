import { FC, HTMLAttributeAnchorTarget, memo } from "react";
import { Article } from "../../model/types/article";
import { ArticleView } from "../../model/const/articleConsts";
import { ToggleFeatures } from "@/shared/lib/features";
import { ArticleListDeprecated } from "./ArticleListDeprecated/ArticleListDeprecated";
import { ArticleListRedesigned } from "./ArticleListRedesigned/ArticleListRedesigned";

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListRedesigned {...props} />}
      off={<ArticleListDeprecated {...props} />}
    />
  );
});
