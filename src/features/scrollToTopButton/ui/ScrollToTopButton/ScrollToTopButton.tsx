import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ScrollToTopButton.module.scss";
import { Icon } from "@/shared/ui/redesigned/Icon";
import CircleIcon from "@/shared/assets/icons/redesigned/circle-up.svg";

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = memo(
  (props: ScrollToTopButtonProps) => {
    const { className } = props;
    const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Icon
        Svg={CircleIcon}
        clickable
        onClick={onClick}
        width={32}
        height={32}
        className={classNames(cls.scrollToTopButton, {}, [className])}
      />
    );
  },
);
