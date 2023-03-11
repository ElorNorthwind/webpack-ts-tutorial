import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select: React.FC<SelectProps> = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readOnly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option value={opt.value} key={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div
      className={classNames(cls.weapper, { [cls.editable]: !readOnly }, [
        className,
      ])}
    >
      {label && <span className={cls.label}>{label}</span>}
      <select
        disabled={readOnly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
