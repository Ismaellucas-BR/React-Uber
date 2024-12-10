import { useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "../../i18n"; // Ajuste o caminho para onde está seu arquivo i18n.js

function PageWrapper({ component: Component }) {
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang); // Atualiza o idioma no i18n
    }
  }, [lang]);

  return <Component />;
}

export default PageWrapper;
