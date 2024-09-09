import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import ErrorBoundary from "./error/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ErrorBoundary fallback="Gloable error handler">
      <App />
    </ErrorBoundary>
  </Provider>
);
