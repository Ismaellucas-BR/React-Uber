import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./src/pages/home/Index";
import Us from "./src/pages/Us/Index";
import Dirigir from "./src/pages/dirigir/Index";
import GettingStarted from "./src/pages/getting-started/index";
import Solutions from "./src/pages/solution";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import AlertHome from "./src/components/AlertHome";
import ScrollToTop from "./src/components/ScrollToTop";

function RoutesApp() {
  // Idioma inicial (você pode usar o localStorage ou outra lógica para definir)
  const initialLang = "pt";
  const [lang, setLang] = useState(initialLang);

  // Função para alterar o idioma
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <BrowserRouter>
      <Header lang={lang} onLanguageChange={changeLanguage} />
      <ScrollToTop />
      <AlertHome />
      <Routes>
        {/* Redireciona para a rota com o idioma padrão */}
        <Route path="/" element={<Navigate to={`/${lang}`} replace />} />

        {/* Rota principal */}
        <Route path="/:lang" element={<Home />} />

        {/* Rotas fixas em português */}
        <Route path="/:lang/quem_somos" element={<Us />} />
        <Route path="/:lang/dirigir" element={<Dirigir />} />
        <Route path="/:lang/getting-started" element={<GettingStarted />} />
        <Route path="/:lang/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
