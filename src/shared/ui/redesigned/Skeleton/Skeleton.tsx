import { CSSProperties, FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const { className, height = "1rem", width = "100%", border = "3px" } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(cls.skeleton, {}, [className])} style={styles} />;
});
