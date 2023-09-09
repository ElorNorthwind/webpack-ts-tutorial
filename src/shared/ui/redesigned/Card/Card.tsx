import { FC, HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

type CardVariant = "normal" | "outlined" | "light";
type CardPadding = "0" | "8" | "16" | "24";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24",
};

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    max = false,
    padding = "8",
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.card, { [cls.fullwidth]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
