import { ChangeEvent, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: Array<SelectOptions<T>>;
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readOnly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option value={opt.value} key={opt.value} className={cls.option}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.wrapper, { [cls.editable]: !readOnly }, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select disabled={readOnly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  );
};
