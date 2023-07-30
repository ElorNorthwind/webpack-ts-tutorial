import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Dropdown.module.scss";
import { flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { Fragment, ReactNode } from "react";
import { AppLink } from "../AppLink/AppLink";

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
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger = "⌄⌄⌄", items } = props;
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-start",
    middleware: [offset(5), flip({ padding: 5 }), shift({ padding: 5, crossAxis: true })],
  });

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button as={"div"} className={cls.btn} ref={refs.setReference}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={cls.menu} style={floatingStyles} ref={refs.setFloating}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.unavailable}
              className={classNames(
                cls.item,
                { [cls.active]: active, [cls.disabled]: item.unavailable },
                [],
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={String(item.content)}
                as={AppLink}
                to={item.href}
                disabled={item.unavailable}
              >
                {content}
              </Menu.Item>
            );
          } else {
            return (
              <Menu.Item key={String(item.content)} as={Fragment} disabled={item.unavailable}>
                {content}
              </Menu.Item>
            );
          }
        })}
      </Menu.Items>
    </Menu>
  );
}
