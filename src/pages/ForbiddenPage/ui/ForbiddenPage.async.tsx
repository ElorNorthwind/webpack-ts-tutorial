import { lazy } from "react";

export const AsyncoForbiddenPage = lazy(async () => await import("./ForbiddenPage"));
