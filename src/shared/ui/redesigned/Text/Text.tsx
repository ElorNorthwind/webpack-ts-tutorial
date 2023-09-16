import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

type TextVariant = "primary" | "error" | "accent";
type TextAlign = "left" | "center" | "right";
type TextSize = "s" | "m" | "l";
type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClassName: Record<TextSize, string> = {
  l: cls.size_l,
  m: cls.size_m,
  s: cls.size_s,
};

const mapSizeToHeadderTag: Record<TextSize, HeaderTagType> = {
  l: "h1",
  m: "h2",
  s: "h3",
};

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  nowrap?: boolean;
  "data-testid"?: string;
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = "primary",
    align = "left",
    size = "m",
    bold,
    nowrap,
    "data-testid": dataTestId = "Text",
  } = props;

  const HeaderTag = mapSizeToHeadderTag[size];
  const sizeClass = mapSizeToClassName[size];

  const additionalClasses = [className, cls[variant], cls[align], cls[sizeClass]];

  return (
    <div
      className={classNames(
        cls.text,
        { [cls.bold]: bold, [cls.nowrap]: nowrap },
        additionalClasses,
      )}
    >
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});
