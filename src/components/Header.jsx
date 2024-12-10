import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DropdownIcon from "../icons/DropdownIcon";
import IconUser from "../assets/icon_user.png";
import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Pega o idioma inicial a partir do path
  const initialLang = location.pathname.split("/")[1] || "pt";
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    i18n.changeLanguage(lang); // Atualiza o idioma do i18n ao inicializar ou mudar
  }, [lang, i18n]);

  // Função para alterar o idioma e sincronizar o estado
  const handleLanguageChange = (language) => {
    if (language !== lang) {
      setLang(language); // Atualiza o estado local
      const newPath = location.pathname.replace(`/${lang}`, `/${language}`);
      navigate(newPath); // Atualiza a URL com o novo idioma
    }
  };

  return (
    <header className="w-full bg-black h-auto text-white flex items-center mx-auto flex-col lg:h-auto">
      <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto p-5 z-10">
        <div className="item items-center flex w-full gap-8 lg:gap-0">
          <Link to={`/${lang}`}>
            <p className="font-UberMoveMedium text-2xl">Uber</p>
          </Link>
          <nav className="hidden font-UberMoveMedium sm:flex text-white lg:ml-10 gap-5">
            <Link to={`/${lang}/dirigir`}>{t("header.drive")}</Link>
            <Link to={`/${lang}/quem_somos`}>{t("header.about")}</Link>
          </nav>
        </div>
        <div className="flex items-end justify-between w-full">
          <div className="flex justify-end items-center w-full gap-4">
            {/* Passa a função de troca e o idioma atual para o switcher */}
            <LanguageSwitcher
              lang={lang}
              onLanguageChange={handleLanguageChange}
            />
            <div className="flex justify-between items-center bg-white rounded-full py-1 pr-4 pl-2 mr-4 user font-UberMoveNormal">
              <img
                className="w-6 rounded-full flex justify-between"
                src={IconUser}
                alt="Foto de usuario"
                width={25}
                height={25}
              />
              <p className="text-black ml-2 name-user">Convidado</p>
              <DropdownIcon color="black" />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
