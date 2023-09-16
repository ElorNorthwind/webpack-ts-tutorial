import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text as TextDeprecated, TextAlign } from "@/shared/ui/deprecated/Text";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleImageBlockComponent.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
          <AppImage
            src={block.src}
            className={cls.image}
            alt={block.title}
            loadingFallback={<Skeleton width={"100%"} height={"200px"} border={"16px"} />}
          />
          {block.title && <Text text={block.title} align="center" />}
        </div>
      }
      off={
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
          <img src={block.src} className={cls.image} alt={block.title} />
          {block.title && <TextDeprecated text={block.title} align={TextAlign.CENTER} />}
        </div>
      }
    />
  );
});
