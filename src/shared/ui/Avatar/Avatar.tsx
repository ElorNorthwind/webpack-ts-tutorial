import { CSSProperties, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  className?: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { className, src, size, alt = "" } = props;
  const styles = useMemo<CSSProperties>(() => {
    return { width: size || "100px", height: size || "100px" };
  }, [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
