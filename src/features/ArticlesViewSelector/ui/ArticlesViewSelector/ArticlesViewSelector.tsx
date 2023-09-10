import { FC, memo } from "react";
import listIconDeprecated from "@/shared/assets/icons/list.svg";
import tilesIconDeprecated from "@/shared/assets/icons/tiles.svg";
import listIcon from "@/shared/assets/icons/redesigned/burger.svg";
import tilesIcon from "@/shared/assets/icons/redesigned/tile.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import cls from "./ArticlesViewSelector.module.scss";
import { ArticleView } from "@/entities/Article";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/redesigned/Stack";

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => tilesIcon,
      off: () => tilesIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: "isAppRedesigned",
      on: () => listIcon,
      off: () => listIconDeprecated,
    }),
  },
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            className={classNames(cls.articlesViewSelectorRedesigned, {}, [className])}
            border="round"
          >
            <HStack>
              {viewTypes.map((viewType) => (
                <Icon
                  Svg={viewType.icon}
                  clickable
                  onClick={onClick(viewType.view)}
                  key={viewType.view}
                  className={classNames("", { [cls.notSelected]: view !== viewType.view }, [])}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.articlesViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                key={viewType.view}
                theme={ButtonTheme.CLEAR}
                onClick={onClick(viewType.view)}
                className={classNames("", { [cls.notSelected]: view !== viewType.view }, [])}
              >
                <IconDeprecated Svg={viewType.icon} height={24} width={24} className={cls.icon} />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);
