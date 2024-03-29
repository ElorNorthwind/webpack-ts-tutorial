import { Fragment, ReactNode, useMemo } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import popupCls from "../../styles/popups.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "../../../../redesigned/Stack";
import { Text } from "../../../Text";
import { Placement, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { Button } from "../../../Button";
import ArrowIcon from "@/shared/assets/icons/redesigned/arrow-bottom.svg";
import { Icon } from "../../../Icon";

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  unavailable?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: Array<ListBoxItem<T>>;
  onChange?: (value: T) => void;
  value?: T;
  defaultValue?: T;
  className?: string;
  label?: ReactNode;
  readOnly?: boolean;
  placement?: Placement;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items,
    value,
    defaultValue,
    onChange,
    label,
    readOnly,
    className,
    placement = "bottom-end",
  } = props;
  const { refs, floatingStyles } = useFloating({
    placement,
    middleware: [offset(5), flip({ padding: 5 }), shift({ padding: 5, crossAxis: true })],
  });

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack className={classNames("", {}, [className])}>
      {label ?? <Text text={label} nowrap />}
      <HListbox
        as="div"
        className={classNames(cls.listBox, {}, [popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readOnly}
      >
        <HListbox.Button
          as={Button}
          variant="filled"
          addonRight={<Icon Svg={ArrowIcon} />}
          className={classNames("", { [cls.readonly]: readOnly }, [])}
          ref={refs.setReference}
        >
          {selectedItem?.content ?? defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [popupCls.panel])}
          style={floatingStyles}
          ref={refs.setFloating}
        >
          {items?.map((item) => (
            <HListbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.unavailable}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.selected]: selected,
                      [popupCls.disabled]: item.unavailable,
                    },
                    [],
                  )}
                >
                  {selected && <span className={popupCls.checkMark}>✓</span>}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
