import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import { Page } from "@/widgets/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? "Редактирование статьи с ID = " + String(id) : "Создание статьи"}
    </Page>
  );
});

export default ArticleEditPage;
