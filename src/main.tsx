import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import "./i18n";
import i18next from "i18next";

const htmlElement = document.documentElement;

htmlElement.dir = i18next.dir(i18next.language);

i18next.on("languageChanged", (lng) => {
  htmlElement.dir = i18next.dir(lng);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
