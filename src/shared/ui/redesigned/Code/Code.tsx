import { FC, memo, useCallback } from "react";
import CopyIconDeprecated from "@/shared/assets/icons/copy.svg";
import CopyIcon from "@/shared/assets/icons/redesigned/copy.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
// eslint-disable-next-line fsd-lorans-plugin/path-checker
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "../../deprecated/Icon/Icon";
import cls from "./Code.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "../Icon";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre className={classNames(cls.codeRedesigned, {}, [className])}>
          <Icon
            Svg={CopyIcon}
            onClick={onCopy}
            clickable
            className={cls.copyBtnRedesigned}
            height={46}
            width={46}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.code, {}, [className])}>
          <ButtonDeprecated onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
            <IconDeprecated Svg={CopyIconDeprecated} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
