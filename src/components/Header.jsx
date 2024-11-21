import React, { useState } from "react";
import DropdownIcon from "../icons/DropdownIcon";
import IconUser from "../assets/icon_user.png";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black h-auto text-white flex items-center mx-auto flex-col lg:h-auto">
      <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto p-5 z-10">
        <div className="item justify-between items-center lg:flex">
          <a href="/">
            <p className="font-UberMoveMedium text-2xl">Uber</p>
          </a>
          <nav className="hidden font-UberMoveMedium lg:flex text-white lg:ml-10 gap-5">
            <a href="/dirigir">{t("header.drive")}</a>
            <a href="/quem_somos">{t("header.about")}</a>
          </nav>
        </div>
        <div className="flex  items-end justify-between w-full">
          <div className="flex justify-end items-center w-full">
            <div className="flex justify-between items-center bg-white rounded-full p-1 mr-4  user">
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
        <Menu />
      </div>
    </header>
  );
}

export default Header;
