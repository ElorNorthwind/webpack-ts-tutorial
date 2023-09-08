import { FC, HTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card: FC<CardProps> = memo((props: CardProps) => {
  const { className, children, theme = CardTheme.NORMAL, max = false, ...otherProps } = props;

  return (
    <div
      className={classNames(cls.card, { [cls.fullwidth]: max }, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
