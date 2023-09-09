import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline";

export type ButtonSize = "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "outline",
    square,
    size = "m",
    fullWidth = false,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        cls.button,
        { [cls.square]: square, [cls.disabled]: disabled, [cls.fullWidth]: fullWidth },
        [className, cls[variant], cls[size]],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});