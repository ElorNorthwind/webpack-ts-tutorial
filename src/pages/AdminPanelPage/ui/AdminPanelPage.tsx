import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const AdminPanelPage = (): JSX.Element => {
  const { t } = useTranslation();
  return <Page>{t("Это админка (на самом деле нет)")}</Page>;
};

export default AdminPanelPage;
