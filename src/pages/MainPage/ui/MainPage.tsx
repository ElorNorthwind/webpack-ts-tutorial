import { useTranslation } from "react-i18next";
import { PageLoader } from "widgets/PageLoader";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Главная страница")} <PageLoader />
    </div>
  );
};

export default MainPage;
