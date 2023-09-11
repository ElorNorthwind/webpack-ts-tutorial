import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../../model/const/articleConsts";
import { ArticleListProps } from "../ArticleList";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { ArticleListItem } from "../../ArticleListItem/ArticleListItem";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleListItemSkeleton } from "../../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleListRedesigned.module.scss";
import { Text } from "@/shared/ui/redesigned/Text";

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleListRedesigned: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <HStack
      wrap="wrap"
      gap="16"
      className={classNames(cls.ArticleListRedesigned, {}, [className])}
      data-testid="ArticleList"
    >
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          //   className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </HStack>
  );
});
