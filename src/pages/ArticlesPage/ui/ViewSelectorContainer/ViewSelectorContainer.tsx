import { FC, memo } from "react";
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector";
import { useArticleView } from "../ArticlesPage/lib/hooks/useArticleView";

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer: FC<ViewSelectorContainerProps> = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props;
    const { view, onChangeView } = useArticleView();

    return <ArticlesViewSelector className={className} view={view} onViewClick={onChangeView} />;
  },
);
