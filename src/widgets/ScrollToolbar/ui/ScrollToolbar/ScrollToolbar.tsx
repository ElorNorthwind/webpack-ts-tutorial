import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ScrollToolbar.module.scss";
import { ScrollToTopButton } from "@/features/scrollToTopButton";
import { VStack } from "@/shared/ui/redesigned/Stack";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classNames(cls.scrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
