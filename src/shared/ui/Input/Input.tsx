import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import React, { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "placeholder" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string | null;
  readOnly?: boolean;
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder = "",
    autoFocus = false,
    readOnly = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(cls.inputWrapper, { [cls.editable]: !readOnly }, [
        className,
      ])}
      {...otherProps}
    >
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder=" "
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
      {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
    </div>
  );
});
