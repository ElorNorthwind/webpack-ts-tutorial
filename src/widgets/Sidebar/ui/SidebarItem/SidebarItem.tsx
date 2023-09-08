import { getUserAuthData } from "@/entities/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink as AppLinkDeprecated, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import cls from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/types/sidebar";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { AppLink } from "@/shared/ui/redesigned/AppLink";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.sidebarItemRedesigned, { [cls.collapsed]: collapsed }, [])}
          variant="primary"
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          to={item.path}
          className={classNames(cls.sidebarItem, { [cls.collapsed]: collapsed }, [])}
          theme={AppLinkTheme.SECONDARY}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
