import { getUserAuthData } from "@/entities/User";

import AboutIconDeprecated from "@/shared/assets/icons/about.svg";
import ArticlesIconDeprecated from "@/shared/assets/icons/articles.svg";
import MainIconDeprecated from "@/shared/assets/icons/main.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile.svg";

import AboutIcon from "@/shared/assets/icons/redesigned/Info.svg";
import ArticlesIcon from "@/shared/assets/icons/redesigned/article.svg";
import MainIcon from "@/shared/assets/icons/redesigned/home.svg";
import ProfileIcon from "@/shared/assets/icons/redesigned/avatar.svg";

import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { SidebarItemType } from "../types/sidebar";
import { toggleFeatures } from "@/shared/lib/features";
import { useSelector } from "react-redux";

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData);
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: "Главная",
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
    },
    {
      path: getRouteAbout(),
      text: "О сайте",
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: "Профиль",
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: "Статьи",
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
        authOnly: true,
      },
    );
  }

  return SidebarItemsList;
};
