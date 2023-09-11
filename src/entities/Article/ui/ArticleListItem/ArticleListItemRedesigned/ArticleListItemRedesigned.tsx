import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleListItemRedesigned.module.scss";
import { ArticleListItemProps } from "../ArticleListItem";
import ViewsIcon from "@/shared/assets/icons/redesigned/eye.svg";
import { Text } from "@/shared/ui/redesigned/Text";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleBlockType, ArticleView } from "../../../model/const/articleConsts";
import { ArticleTextBlock } from "../../../model/types/article";
import { Card } from "@/shared/ui/redesigned/Card";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { ArticleTextBlockComponent } from "../../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { getRouteArticleDetails } from "@/shared/const/router";
import { Button } from "@/shared/ui/redesigned/Button";

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = memo(
  (props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(", ")} />;
    const views = (
      <HStack>
        <Icon Svg={ViewsIcon} />
        <Text text={String(article.views)} />
      </HStack>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;
      return (
        <Card
          padding="24"
          max
          className={classNames(cls.articleListItem, {}, [className, cls[view]])}
          data-testid={"ArticleListItem"}
        >
          <VStack gap="16">
            <HStack max>
              <Avatar size={32} src={article.user.avatar} />
              <Text text={article.user.username} bold />
              <Text text={article.createdAt} />
            </HStack>
            <Text title={article.title} bold />
            <Text title={article.subtitle} size="s" />
            {/* {types} */}
            <AppImage
              src={article.img}
              className={cls.img}
              alt={article.title}
              loadingFallback={<Skeleton width={"100%"} height={200} />}
            />
            {textBlock?.paragraphs && (
              <Text text={textBlock.paragraphs.slice(0, 2).join(" ")} className={cls.textBlock} />
            )}
            <HStack max justify={"between"}>
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button variant="outline">{t("Читать далее")}</Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      );
    } else {
      return (
        <AppLink
          target={target}
          data-testid={"ArticleListItem"}
          to={getRouteArticleDetails(article.id)}
          className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        >
          <Card className={cls.card}>
            <div className={cls.imageWrapper}>
              <AppImage
                alt={article.title}
                src={article.img}
                className={cls.img}
                loadingFallback={<Skeleton width={230} height={200} />}
              />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
              {types}
              {views}
            </div>
            <Text text={article.title} className={cls.title} />
          </Card>
        </AppLink>
      );
    }
  },
);
