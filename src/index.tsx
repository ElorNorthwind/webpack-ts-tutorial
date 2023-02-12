import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

import { ErrorBoundry } from "app/providers/ErrorBoundry";
import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ErrorBoundry>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundry>
  </BrowserRouter>,
  document.getElementById("root")
);
