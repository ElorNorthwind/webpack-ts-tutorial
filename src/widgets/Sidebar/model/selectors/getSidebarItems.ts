import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import AboutIcon from "shared/assets/icons/about.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePaths.main,
      text: "Главная",
      Icon: MainIcon,
    },
    {
      path: RoutePaths.about,
      text: "О сайте",
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: RoutePaths.profile + userData.id,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePaths.articles,
        text: "Статьи",
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return SidebarItemsList;
});
