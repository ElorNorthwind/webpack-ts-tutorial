import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilters.module.scss";
import { Input } from "@/shared/ui/deprecated/Input";
import { Card } from "@/shared/ui/deprecated/Card";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { useArticleFilters } from "../ArticlesPage/lib/hooks/useArticleFilters";
import { useArticleView } from "../ArticlesPage/lib/hooks/useArticleView";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
  (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { sort, order, search, type, onChangeSort, onChangeOrder, onChangeSearch, onChangeType } =
      useArticleFilters();
    const { view, onChangeView } = useArticleView();

    return (
      <div className={classNames(cls.articlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticlesViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input value={search} onChange={onChangeSearch} placeholder={t("Поиск")} />
        </Card>
        <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
      </div>
    );
  },
);
