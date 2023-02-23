import { BugButton } from "app/providers/ErrorBoundry";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Главная страница")} <BugButton />
      <br />
      <Counter />
    </div>
  );
};

export default MainPage;
