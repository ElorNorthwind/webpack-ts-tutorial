import { FC, ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Popover.module.scss";
import popupCls from "../../styles/popups.module.scss";
import { Popover as HPopover } from "@headlessui/react";
import { Placement, flip, offset, shift, useFloating } from "@floating-ui/react-dom";

interface PopoverProps {
  className?: string;
  trigger?: ReactNode;
  placement?: Placement;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, placement = "bottom-start", children } = props;
  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [offset(5), flip({ padding: 5 }), shift({ padding: 5, crossAxis: true })],
  });

  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
      <HPopover.Button
        ref={refs.setReference}
        className={classNames("", {}, [popupCls.hiddenTrigger])}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, [popupCls.panel])}
        style={floatingStyles}
        ref={refs.setFloating}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
