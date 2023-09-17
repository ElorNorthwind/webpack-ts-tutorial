import { memo, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ArrowIcon from "@/shared/assets/icons/redesigned/arrow-bottom.svg";
import { useSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const SidebarItemsList = useSidebarItems();
  const { className } = props;
  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, SidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(cls.sidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
        >
          <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
          <VStack role="navigation" className={cls.items}>
            {itemList}
          </VStack>
          <Icon
            Svg={ArrowIcon}
            data-testid="sidebar-toggle"
            className={cls.collapseBtn}
            clickable
            onClick={onToggle}
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
          <VStack role="navigation" className={cls.items}>
            {itemList}
          </VStack>
          <Button
            data-testid="sidebar-toggle"
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
            onClick={onToggle}
          >
            {collapsed ? ">" : "<"}
          </Button>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
    />
  );
});
