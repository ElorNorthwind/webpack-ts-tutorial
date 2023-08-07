import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Dropdown.module.scss";
import popupCls from "../../styles/popups.module.scss";
import { Placement, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { Fragment, ReactNode } from "react";
import { AppLink } from "../../../AppLink/AppLink";

export interface DropdownItem {
  unavailable?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  placement?: Placement;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger = "⌄⌄⌄", placement = "bottom-start", items } = props;
  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [offset(5), flip({ padding: 5 }), shift({ padding: 5, crossAxis: true })],
  });

  return (
    <Menu as="div" className={classNames("", {}, [className, popupCls.popup])}>
      <Menu.Button as={"div"} className={popupCls.hiddenTrigger} ref={refs.setReference}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [popupCls.panel])}
        style={floatingStyles}
        ref={refs.setFloating}
      >
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.unavailable}
              // key={`dropdown-content-key-${index}`}
              className={classNames(
                cls.item,
                { [popupCls.active]: active, [popupCls.disabled]: item.unavailable },
                [],
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={`dropdown-key-${index}`}
                as={AppLink}
                to={item.href}
                disabled={item.unavailable}
              >
                {content}
              </Menu.Item>
            );
          } else {
            return (
              <Menu.Item key={`dropdown-key-${index}`} as={Fragment} disabled={item.unavailable}>
                {content}
              </Menu.Item>
            );
          }
        })}
      </Menu.Items>
    </Menu>
  );
}
