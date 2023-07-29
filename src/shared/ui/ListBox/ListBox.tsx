import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "../Stack";
import { Text } from "../Text/Text";
import { flip, offset, shift, useFloating } from "@floating-ui/react-dom";

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  unavailable?: boolean;
}

interface ListBoxProps {
  items?: Array<ListBoxItem<string>>;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
  label?: ReactNode;
  readOnly?: boolean;
}

export function ListBox(props: ListBoxProps) {
  const { items, value, defaultValue, onChange, label, readOnly, className } = props;
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-end",
    middleware: [offset(5), flip({ padding: 5 }), shift({ padding: 5, crossAxis: true })],
  });

  return (
    <HStack className={classNames("", {}, [className])}>
      <HListbox
        as="div"
        className={classNames(cls.listBox, {}, [])}
        value={value}
        onChange={onChange}
        disabled={readOnly}
      >
        <HListbox.Button
          className={classNames(cls.trigger, { [cls.readonly]: readOnly }, [])}
          ref={refs.setReference}
        >
          {value ?? defaultValue}
          {<span>˅</span>}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [])}
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
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: item.unavailable,
                    },
                    [],
                  )}
                >
                  {selected && <span className={cls.checkMark}>✓</span>}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
      {label ?? <Text text={label} />}
    </HStack>
  );
}
