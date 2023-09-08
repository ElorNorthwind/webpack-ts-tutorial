import { FC, ImgHTMLAttributes, ReactElement, memo, useLayoutEffect, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  loadingFallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = memo((props: AppImageProps) => {
  const { className, src, alt = "image", loadingFallback, errorFallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && loadingFallback) {
    return loadingFallback;
  }
  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img className={classNames("", {}, [className])} src={src} alt={alt} {...otherProps} />;
});
