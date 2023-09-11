import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { ToggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";

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
  const listboxProps = {
    className,
    onChange: onChangeHandler,
    items: options,
    value,
    defaultValue: t("Укажите страну"),
    label: t("Страна"),
    readOnly,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...listboxProps} />}
      off={<ListBoxDeprecated {...listboxProps} />}
    />
  );
});
