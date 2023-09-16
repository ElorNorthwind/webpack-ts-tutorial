import { FC, HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

type CardVariant = "normal" | "outlined" | "light";
type CardPadding = "0" | "8" | "16" | "24";
type CardBorder = "normal" | "round";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  fullHeight?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  "0": "gap_0",
  "8": "gap_8",
  "16": "gap_16",
  "24": "gap_24",
};

const mapBorderToClass: Record<CardBorder, string> = {
  normal: "border_normal",
  round: "border_round",
};

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = "normal",
    max = false,
    fullHeight = false,
    padding = "8",
    border = "normal",
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];
  const borderClass = mapBorderToClass[border];

  return (
    <div
      className={classNames(cls.card, { [cls.fullwidth]: max, [cls.fullheight]: fullHeight }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[borderClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
