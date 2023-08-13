import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const FOrbiddenPage = (): JSX.Element => {
  const { t } = useTranslation();
  return <Page>{t("Нет прав для просмотра этой страницы!")}</Page>;
};

export default FOrbiddenPage;
