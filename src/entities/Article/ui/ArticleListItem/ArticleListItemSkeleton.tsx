import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { ArticleView } from "../../model/const/articleConsts";
import cls from "./ArticleListItem.module.scss";
import { Card as CardRedesigned } from "@/shared/ui/redesigned/Card";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { toggleFeatures } from "@/shared/lib/features";

interface ArticleListItemSkeletonDeprecatedProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonDeprecatedProps> = memo(
  (props: ArticleListItemSkeletonDeprecatedProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: "isAppRedesigned",
      on: () => cls.articleListItemRedesigned,
      off: () => cls.articleListItem,
    });

    const Skeleton = toggleFeatures({
      name: "isAppRedesigned",
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    const Card = toggleFeatures({
      name: "isAppRedesigned",
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border={"50%"} />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={150} height={16} className={cls.date} />
            </div>
            <Skeleton width={250} height={24} className={cls.title} />
            <Skeleton height={200} className={cls.img} />
            <Skeleton height={250} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    } else {
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.imageWrapper}>
              <Skeleton width={"100%"} height={200} className={cls.img} />
            </div>
            <div className={cls.infoWrapper}>
              <Skeleton width={130} height={16} className={cls.title} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
          </Card>
        </div>
      );
    }
  },
);
