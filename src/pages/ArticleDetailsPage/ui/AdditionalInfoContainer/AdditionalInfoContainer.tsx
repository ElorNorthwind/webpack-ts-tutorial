import { getArticleDetailsData } from "@/entities/Article";
import { Card } from "@/shared/ui/redesigned/Card";
import { ArticleAdditionalInfo } from "@/widgets/ArticleAdditionalInfo";
import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import cls from "./AdditionalInfoContainer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import { getRouteArticleEdit } from "@/shared/const/router";

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = memo(
  (props: AdditionalInfoContainerProps) => {
    const { className } = props;
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();
    const onEditArticle = useCallback(() => {
      if (article?.id) {
        navigate(getRouteArticleEdit(article?.id));
      }
    }, [article?.id, navigate]);

    if (!article) return null;

    return (
      <Card padding="24" border="partial" className={classNames(cls.card, {}, [className])}>
        <ArticleAdditionalInfo
          author={article.user}
          createdAt={article.createdAt}
          views={article.views}
          onEdit={onEditArticle}
        />
      </Card>
    );
  },
);
