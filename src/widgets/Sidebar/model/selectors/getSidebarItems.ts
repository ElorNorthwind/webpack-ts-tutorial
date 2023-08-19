import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticlesIcon from "@/shared/assets/icons/articles.svg";
import MainIcon from "@/shared/assets/icons/main.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: "Главная",
      Icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: "О сайте",
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: "Статьи",
        Icon: ArticlesIcon,
        authOnly: true,
      },
    );
  }

  return SidebarItemsList;
});
