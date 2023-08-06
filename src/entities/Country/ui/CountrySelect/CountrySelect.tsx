import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";
import { ListBox } from "@/shared/ui/Popups";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect: React.FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readOnly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ListBox
      className={className}
      onChange={onChangeHandler}
      items={options}
      value={value}
      defaultValue="Укажите страну"
      label={t("Страна")}
      readOnly={readOnly}
    />
  );

  // return (
  //   <Select
  //     className={className}
  //     label={t("Страна") || ""}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readOnly={readOnly}
  //   />
  // );
});
