import { BugButton } from "app/providers/ErrorBoundry";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();
  // const [value, setValue] = useState("");
  // const onChange = (val: string) => {
  //   setValue(val);
  // };

  return (
    <div>
      {t("Главная страница")} <BugButton />
      <br />
      {/* <Input value={value} onChange={onChange} placeholder="Я хуйня" /> */}
    </div>
  );
};

export default MainPage;
