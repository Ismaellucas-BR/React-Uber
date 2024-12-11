import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../i18n.js";
import { LanguageProvider } from "./components/LanguageContext.jsx";
createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageProvider>
);
