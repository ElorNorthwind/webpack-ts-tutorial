import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </Page>
  );
};

export default NotFoundPage;
