import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { ErrorBoundry } from "@/app/providers/ErrorBoundry";
import { StoreProvider } from "@/app/providers/StoreProvider";
import "@/shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");

if (!domNode) {
  throw new Error("Контейнер root не найден! Не удается вмонтировать react-приложение");
}
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundry>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundry>
    </StoreProvider>
  </BrowserRouter>,
);
