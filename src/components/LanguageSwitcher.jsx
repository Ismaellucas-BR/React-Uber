import React from "react";

function LanguageSwitcher({ lang, onLanguageChange }) {
  return (
    <div className="relative flex items-center">
      {/* Fundo do switcher */}
      <div className="w-16 h-8 bg-gray-300 rounded-full relative transition-colors">
        {/* Switcher */}
        <div
          className={`w-8 h-8 bg-white rounded-full absolute transition-transform transform ${
            lang === "en" ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </div>

      {/* Botões para trocar idioma */}
      <button
        onClick={() => onLanguageChange("pt")}
        className="absolute left-0 w-8 h-8 text-center text-sm text-black font-semibold"
      >
        PT
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className="absolute right-0 w-8 h-8 text-center text-sm text-black font-semibold"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
