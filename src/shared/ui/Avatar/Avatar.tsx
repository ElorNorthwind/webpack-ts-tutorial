import { CSSProperties, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { AppImage } from "../AppImage";
import UserIcon from "@/shared/assets/icons/avatar.svg";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
  src?: string;
  className?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { className, src, size = 100, alt = "", fallbackInverted = false } = props;
  const styles = useMemo<CSSProperties>(() => {
    return { width: size, height: size };
  }, [size]);

  const loadingFallback = <Skeleton width={size} height={size} border={"50%"} />;
  const errorFallback = (
    <Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted} />
  );

  return (
    <AppImage
      loadingFallback={loadingFallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
