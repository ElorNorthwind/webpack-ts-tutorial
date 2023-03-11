import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";

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

export const CountrySelect: React.FC<CountrySelectProps> = memo(
  (props: CountrySelectProps) => {
    const { className, value, onChange, readOnly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        label={t("Страна") || ""}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    );
  }
);
