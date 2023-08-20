import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const ForbiddenPage = (): JSX.Element => {
  const { t } = useTranslation();
  return <Page data-testid={"ForbiddenPage"}>{t("Нет прав для просмотра этой страницы!")}</Page>;
};

export default ForbiddenPage;
