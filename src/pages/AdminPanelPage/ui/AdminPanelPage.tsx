import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const AdminPanelPage = (): JSX.Element => {
  const { t } = useTranslation();
  return <Page data-testid={"AdminPanelPage"}>{t("Это админка (на самом деле нет)")}</Page>;
};

export default AdminPanelPage;
