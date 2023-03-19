import AboutIcon from "shared/assets/icons/about.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePaths.profile,
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
];
