import { BugButton } from "app/providers/ErrorBoundry";

import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  // const [value, setValue] = useState("");
  // const onChange = (val: string) => {
  //   setValue(val);
  // };

  return (
    <Page>
      {t("Главная страница")} <BugButton />
      {/* <br />
      <Input value={value} onChange={onChange} placeholder="текста кусок" /> */}
    </Page>
  );
};

export default MainPage;
