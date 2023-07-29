import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readOnly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      className={className}
      onChange={onChangeHandler}
      items={options}
      value={value}
      defaultValue="Укажите валюту"
      label={t("Валюта")}
      readOnly={readOnly}
    />
  );

  // return (
  //   <Select
  //     className={className}
  //     label={t("Валюта") || ""}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readOnly={readOnly}
  //   />
  // );
});
