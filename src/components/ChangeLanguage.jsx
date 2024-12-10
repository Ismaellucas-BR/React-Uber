import { useNavigate, useParams } from "react-router-dom";

function LanguageSwitcher() {
  const navigate = useNavigate();
  const { lang } = useParams();

  const switchLanguage = (newLang) => {
    // Remove o idioma atual da URL, se existir
    const pathWithoutLang = window.location.pathname.replace(/^\/(pt|en)/, "");
    // Navega para a URL com o novo idioma
    navigate(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("pt")}>Português</button>
      <button onClick={() => switchLanguage("en")}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
