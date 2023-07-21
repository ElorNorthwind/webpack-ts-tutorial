import {
  FC,
  HTMLAttributeAnchorTarget,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useVirtualizer } from "@tanstack/react-virtual";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getArticles = (
  articles: Article[],
  view: ArticleView,
  target: HTMLAttributeAnchorTarget | undefined,
) => {
  return new Array(articles.length)
    .fill(0)
    .map((item, index) => (
      <ArticleListItem
        className={cls.card}
        article={articles[index]}
        view={view}
        key={articles[index].id}
        target={target}
      />
    ));
};

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 4 : 2)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);
};

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();
  const [virtualItems, setVirtualItems] = useState<JSX.Element[]>([]);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: articles.length + (isLoading ? (view === ArticleView.SMALL ? 4 : 2) : 0),
    getScrollElement: () => document.getElementById("page_wrapper"),
    estimateSize: () => (view === ArticleView.SMALL ? 280 : 667) + 30,
  });

  useEffect(() => {
    rowVirtualizer.measure();
  }, [rowVirtualizer, view]);

  useEffect(() => {
    setVirtualItems(
      getArticles(articles, view, target).concat(isLoading ? getSkeletons(view) : []),
    );
  }, [articles, view, target, isLoading]);

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} title={t("Статьи не найдены")} />;
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? (
        <div
          style={{
            height: `${String(rowVirtualizer.getTotalSize())}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${String(virtualItem.size)}px`,
                transform: `translateY(${String(virtualItem.start)}px)`,
              }}
            >
              {virtualItems[virtualItem.index]}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
});
