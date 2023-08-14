import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/widgets/PageLoader";
import { AppRouteProps } from "@/shared/types/rounter";
import { RequireAuth } from "./RequireAuth";
import { routeConfig } from "../config/routeConfig";

const AppRouter = (): JSX.Element => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {/* <div className="page-wrapper">{route.element}</div> */}
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route?.roles}>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
