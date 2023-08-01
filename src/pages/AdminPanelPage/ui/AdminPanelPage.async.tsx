import { lazy } from "react";

export const AsyncAdminPanelPage = lazy(async () => await import("./AdminPanelPage"));
