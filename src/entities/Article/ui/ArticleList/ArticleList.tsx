import { FC, HTMLAttributeAnchorTarget, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { Text, TextSize } from "@/shared/ui/deprecated/Text";
import { useVirtualizer } from "@tanstack/react-virtual";
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
