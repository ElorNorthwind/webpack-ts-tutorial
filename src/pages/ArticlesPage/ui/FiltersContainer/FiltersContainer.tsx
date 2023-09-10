import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { FC, memo } from "react";
import { useArticleFilters } from "../ArticlesPage/lib/hooks/useArticleFilters";

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer: FC<FiltersContainerProps> = memo((props: FiltersContainerProps) => {
  const { className } = props;
  const { sort, order, search, type, onChangeSort, onChangeOrder, onChangeSearch, onChangeType } =
    useArticleFilters();

  return (
    <ArticlesFilters
      className={className}
      sort={sort}
      order={order}
      search={search}
      type={type}
      onChangeSort={onChangeSort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
    />
  );
});
