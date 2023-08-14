import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/app/providers/router/config/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppRouteProps } from "@/shared/types/rounter";

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
