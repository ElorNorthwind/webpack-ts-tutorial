import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { Text, TextSize } from "shared/ui/Text/Text";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 4 : 2)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);
};

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();

  const renderArticle = useCallback(
    (article: Article) => {
      return (
        <ArticleListItem
          className={cls.card}
          article={article}
          view={view}
          key={article.id}
          target={target}
        />
      );
    },
    [view],
  );

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
  //       {getSkeletons(view)}
  //     </div>
  //   );
  // }

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} title={t("Статьи не найдены")} />;
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});