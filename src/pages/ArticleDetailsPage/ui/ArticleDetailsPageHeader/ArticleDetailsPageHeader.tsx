import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetailsSelectors";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(RoutePaths.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePaths.article_details}${article?.id || ""}/edit`);
    }, [article?.id, navigate]);

    return (
      <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
        <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
          {t("Назад к списку статей")}
        </Button>
        {canEdit && (
          <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
            {t("Редактировать")}
          </Button>
        )}
      </div>
    );
  },
);
