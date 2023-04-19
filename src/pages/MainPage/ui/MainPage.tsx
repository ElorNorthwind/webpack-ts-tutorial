import { BugButton } from "app/providers/ErrorBoundry";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Page } from "shared/ui/Page/Page";

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
