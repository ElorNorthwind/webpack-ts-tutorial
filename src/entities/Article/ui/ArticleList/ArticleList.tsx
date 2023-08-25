import { FC, HTMLAttributeAnchorTarget, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
import { Text, TextSize } from "@/shared/ui/Text";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ArticleView } from "../../model/const/articleConsts";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();

  const skeletonCount = isLoading ? (view === ArticleView.SMALL ? 4 : 2) : 0;
  const itemCount = articles.length + skeletonCount;
  const itemsPerRow = view === ArticleView.SMALL ? 4 : 1;
  const rowCount = Math.ceil(itemCount / itemsPerRow);
  const getRowHeight = (i: number) => {
    const baseSize = view === ArticleView.SMALL ? 280 : 667;
    return baseSize + 30;
  };

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => document.getElementById("page_wrapper"),
    estimateSize: (i) => getRowHeight(i),
  });

  useEffect(() => {
    rowVirtualizer.measure();
  }, [rowVirtualizer, view]);

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} title={t("Статьи не найдены")} />;
  }

  return (
    <>
      <div
        className={classNames(cls.articleList, {}, [className, cls[view]])}
        data-testid={"ArticleList"}
        style={{
          height: `${String(rowVirtualizer.getTotalSize())}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map(function (virtualItem) {
          const rowItems = [];
          const fromIndex = virtualItem.index * itemsPerRow;
          const toIndex = Math.min(fromIndex + itemsPerRow, itemCount);
          for (let i = fromIndex; i < toIndex; i++) {
            if (articles[i]) {
              rowItems.push(
                <ArticleListItem
                  className={cls.card}
                  article={articles[i]}
                  view={view}
                  key={`${String(virtualItem.index)}-${i}`}
                  target={target}
                />,
              );
            } else {
              rowItems.push(
                <ArticleListItemSkeleton
                  className={cls.card}
                  key={`${String(virtualItem.index)}-${i}`}
                  view={view}
                />,
              );
            }
          }

          return (
            <div
              key={virtualItem.key}
              className={cls.row}
              style={{
                height: `${String(virtualItem.size)}px`,
                transform: `translateY(${String(virtualItem.start)}px)`,
              }}
            >
              {rowItems}
            </div>
          );
        })}
      </div>
    </>
  );
});
