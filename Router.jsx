import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./src/pages/home/Index";
import Us from "./src/pages/Us/Index";
import Dirigir from "./src/pages/dirigir/Index";
import GettingStarted from "./src/pages/getting-started/index";
import Solutions from "./src/pages/solution";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

function RoutesApp() {
  // Idioma inicial (você pode usar o localStorage ou outra lógica para definir)
  const initialLang = "pt"; // ou "en"
  const [lang, setLang] = useState(initialLang);

  const routes = {
    en: {
      home: "home",
      about: "about_us",
      contact: "contact",
    },
    pt: {
      home: "inicio",
      about: "quem_somos",
      contact: "contato",
    },
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redireciona para o idioma padrão */}
        <Route path="/" element={<Navigate to={`/${lang}`} replace />} />

        {/* Página inicial */}
        <Route path="/:lang" element={<Home />} />

        {/* Página dinâmica com operador ternário */}
        <Route
          path={`/:lang/${lang === "pt" ? routes.pt.about : routes.en.about}`}
          element={<Us />}
        />

        {/* Outras páginas */}
        <Route
          path={`/:lang/${lang === "pt" ? "dirigir" : "driving"}`}
          element={<Dirigir />}
        />
        <Route
          path={`/:lang/${
            lang === "pt" ? "primeiros-passos" : "getting-started"
          }`}
          element={<GettingStarted />}
        />
        <Route
          path={`/:lang/${lang === "pt" ? "solucoes" : "solutions"}`}
          element={<Solutions />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
