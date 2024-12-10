import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (language) => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // Atualiza o idioma inicial no i18next
  }, [lang, i18n]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
