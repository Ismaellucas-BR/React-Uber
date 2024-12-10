import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { List } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../components/ChangeLanguage";
import DropdownIcon from "../icons/DropdownIcon";
import IconUser from "../assets/icon_user.png";
import LanguageSwitcher from "./LanguageSwitcher";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Menu() {
  const { t, i18n } = useTranslation(); // Obtendo a instância do i18next
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Troca de idioma
  };
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Muda o idioma no i18n
    setLang(language); // Atualiza o estado do idioma
    navigate(`/${language}${window.location.pathname.substring(3)}`); // Atualiza a URL
  };
  const location = useLocation();
  // Pega o idioma inicial a partir do path
  const initialLang = location.pathname.split("/")[1] || "pt";
  const [lang, setLang] = useState(initialLang);
  useEffect(() => {
    i18n.changeLanguage(lang); // Atualiza o idioma do i18n ao inicializar ou mudar
  }, [lang, i18n]);

  return (
    <Sheet>
      <SheetTrigger>
        <List size={32} />
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle className="flex justify-start bg-black w-full p-4">
            <div className="flex  w-full">
              <div className="flex justify-start items-center w-full gap-4">
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
          </SheetTitle>{" "}
          {/* Usando a tradução aqui */}
          <SheetDescription>
            <ul className="flex flex-col items-start text-left gap-4 p-4 text-black font-UberMoveBold text-3xl">
              <li>Home</li>
              <li>{t("PagesMenu.dirigir")}</li>
              <li>{t("PagesMenu.sobre_nos")}</li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
