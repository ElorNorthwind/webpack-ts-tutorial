import { BugButton } from "app/providers/ErrorBoundry";
import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Главная страница")} <BugButton />
    </div>
  );
};

export default MainPage;
