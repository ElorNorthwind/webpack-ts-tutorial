import { FC, HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import ViewsIcon from "@/shared/assets/icons/viewes.svg";
import { getRouteArticleDetails } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Card } from "@/shared/ui/deprecated/Card";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleBlockType, ArticleView } from "../../model/const/articleConsts";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from "./ArticleListItem.module.scss";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Text } from "@/shared/ui/deprecated/Text";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={ViewsIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        data-testid={"ArticleListItem"}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            loadingFallback={<Skeleton width={"100%"} height={200} />}
          />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>{t("Читать далее")}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
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
});
