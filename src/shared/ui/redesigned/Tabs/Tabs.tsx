import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode, useCallback } from "react";
import cls from "./Tabs.module.scss";
// eslint-disable-next-line fsd-lorans-plugin/path-checker
import { Card } from "../Card";
import { Flex, FlexDirection } from "../Stack/Flex/Flex";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick, direction = "row" } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <Flex className={classNames(cls.tabs, {}, [className])} direction={direction} align="start">
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            key={tab.value}
            className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
            variant={isSelected ? "light" : "normal"}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};
