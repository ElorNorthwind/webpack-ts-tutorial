import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesFilters.module.scss";
import { Card } from "@/shared/ui/redesigned/Card";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleSortField, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types/sort";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { Input } from "@/shared/ui/redesigned/Input";

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  type: ArticleType;
  onChangeType: (tab: ArticleType) => void;
  search: string;
  onChangeSearch: (value: string) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    type,
    search,
    onChangeSort,
    onChangeOrder,
    onChangeType,
    onChangeSearch,
  } = props;
  const { t } = useTranslation();

  return (
    <Card className={classNames(cls.articlesFilters, {}, [className])} padding="24">
      <VStack gap="32">
        <Input value={search} onChange={onChangeSearch} placeholder={t("Поиск")} />
        <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
