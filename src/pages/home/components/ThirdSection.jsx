import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import U4B from "../../../assets/u4b-square.webp";
function ThirdSection() {
  const location = useLocation();
  const initialLang = location.pathname.split("/")[1] || "pt";
  const [lang, setLang] = useState(initialLang);
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-white">
      <section className="first-section-black flex flex-col items-center justify-between w-full max-w-7xl mx-auto pt-10 md:pt-5 px-5 bg-white sm:pt-20 lg:flex-row sm:pb-10 gap-10">
        <div className="left-side w-full flex flex-col lg:ml-4 lg:h-screen lg:w-2/5  gap-5 justify-center">
          <h2 className="text-slate-800 text-4xl cta-text  sm:text-[3.25rem] sm:leading-tight	">
            {t("third-title")}
          </h2>
          <p className="text-slate-800 font-UberMoveNormal">
            {t("third-subtitle")}
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <Link className="btn-start mr-4" to={`/${lang}/getting-started`}>
              {t("third-btn")}
            </Link>

            <Link
              className="link-underline text-black mt-4 border-b pb-1 font-UberMoveNormal"
              to={`/${lang}/solutions`}
            >
              {t("third-btn2")}
            </Link>
          </div>
        </div>
        <div className="right-side mt-5 md:mt-10  flex justify-end items-center pb-10  lg:mt-0 lg:w-3/5">
          <img
            className="rounded-md w-full lg:w-4/5"
            src={U4B}
            layout="resposive"
            width={800}
            height={800}
            alt="Mulher saindo do carro"
          />
        </div>
      </section>
    </div>
  );
}

export default ThirdSection;
