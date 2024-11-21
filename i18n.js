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
  lng: "pt", // ou 'en', dependendo do idioma inicial
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
