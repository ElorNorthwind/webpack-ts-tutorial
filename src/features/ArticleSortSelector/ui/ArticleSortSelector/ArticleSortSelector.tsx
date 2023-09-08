import { FC, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOptions } from "@/shared/ui/deprecated/Select";
import { SortOrder } from "@/shared/types/sort";
import { ArticleSortField } from "@/entities/Article";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props;
    const { t } = useTranslation();
    const sortOptions = useMemo<Array<SelectOptions<ArticleSortField>>>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t("дата создания"),
        },
        {
          value: ArticleSortField.TITLE,
          content: t("заголовок"),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t("просмотры"),
        },
      ],
      [t],
    );
    const orderOptions = useMemo<Array<SelectOptions<SortOrder>>>(
      () => [
        {
          value: "asc",
          content: t("по возрастанию"),
        },
        {
          value: "desc",
          content: t("по убыванию"),
        },
      ],
      [t],
    );

    return (
      <div className={classNames(cls.articleSortSelector, {}, [className])}>
        <Select<ArticleSortField>
          value={sort}
          onChange={onChangeSort}
          options={sortOptions}
          label={t("Сортировать по") || ""}
        />
        <Select<SortOrder>
          value={order}
          onChange={onChangeOrder}
          options={orderOptions}
          label={t("Порядок") || ""}
        />
      </div>
    );
  },
);
