import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPt from "./public/locales/pt/translation.json";
import translationEn from "./public/locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: translationPt,
    },
    en: {
      translation: translationEn,
    },
  },
  lng: "pt", // idioma padrão (pode ser dinâmico)
  fallbackLng: "pt", // fallback para pt caso o idioma não seja encontrado
  interpolation: {
    escapeValue: false,
  },
});

// Atualiza o idioma baseado na URL
i18n.on("languageChanged", (lng) => {
  // Aqui você pode garantir que o idioma no i18n seja sempre atualizado
  console.log(`Idioma alterado para: ${lng}`);
});

export default i18n;
