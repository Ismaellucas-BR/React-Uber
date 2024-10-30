import React, { useState } from "react";
import DropdownIcon from "../icons/DropdownIcon";
import IconUser from "../assets/icon_user.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black h-14 text-white flex items-center mx-auto flex-col lg:h-auto">
      <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto p-5 z-10">
        <div className="item justify-between items-center lg:flex">
          <a href="/">
            <p className="font-UberMove font-medium text-2xl">Uber</p>
          </a>
          <nav className="hidden font-UberMove font-medium lg:flex text-white lg:ml-10 gap-5">
            <a href="/dirigir">Dirigir</a>
            <a href="/quem_somos">Sobre</a>
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

            <svg
              className="flex sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              color="white"
            >
              <path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,
              <path d="M2 15h20v3H2v-3Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="subMenuMobile flex flex-col gap-5 bg-white min-h-screen w-full z-10 p-5 absolute top-24 left-0 sm:hidden text-3xl text-black font-txt-bold font-UberMove font-medium">
          <a href="/dirigir">Dirigir</a>
          <a href="/quem_somos">Sobre</a>
        </div>
      )}
    </header>
  );
}

export default Header;
