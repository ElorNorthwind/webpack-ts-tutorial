import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
  S = "size_s",
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeadderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.L]: "h1",
  [TextSize.M]: "h2",
  [TextSize.S]: "h3",
};

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeadderTag[size];

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
