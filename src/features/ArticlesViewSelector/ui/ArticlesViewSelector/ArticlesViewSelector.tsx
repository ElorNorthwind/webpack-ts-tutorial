import { FC, memo } from "react";
import listIcon from "@/shared/assets/icons/list.svg";
import tilesIcon from "@/shared/assets/icons/tiles.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import cls from "./ArticlesViewSelector.module.scss";
import { ArticleView } from "@/entities/Article";
import { Icon } from "@/shared/ui/deprecated/Icon";

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.SMALL, icon: tilesIcon },
  { view: ArticleView.BIG, icon: listIcon },
];

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = memo(
  (props: ArticlesViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => {
      return () => {
        onViewClick?.(newView);
      };
    };

    return (
      <div className={classNames(cls.articlesViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
            className={classNames("", { [cls.notSelected]: view !== viewType.view }, [])}
          >
            <Icon Svg={viewType.icon} height={24} width={24} className={cls.icon} />
          </Button>
        ))}
      </div>
    );
  },
);
