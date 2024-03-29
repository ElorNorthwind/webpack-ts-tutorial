/* eslint-disable fsd-lorans-plugin/layer-imports */
import { AppRouter } from "@/app/providers/router";
import { getUserInited } from "@/entities/User";
import { Suspense, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import "./styles/index.scss";
import { initAuthData } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/widgets/PageLoader";
import { ToggleFeatures } from "@/shared/lib/features";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout";
import { useAppToolbar } from "./lib/useAppToolbar";
import { withTheme } from "./providers/ThemeProvider/ui/withTheme";

const App = memo((): JSX.Element => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures feature="isAppRedesigned" on={<AppLoaderLayout />} off={<PageLoader />} />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className={classNames("app_redesigned", {}, [])}>
          <Suspense fallback={<PageLoader />}>
            <MainLayout
              header={<Navbar />}
              sidebar={<Sidebar />}
              content={<AppRouter />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames("app", {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className={"content-page"}>
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
    />
  );
});

export default withTheme(App);
