import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function SecondSc() {
  const location = useLocation();
  const initialLang = location.pathname.split("/")[1] || "pt";
  const [lang, setLang] = useState(initialLang);
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white flex flex-col-reverse items-center justify-between w-full max-w-7xl mx-auto pt-10 px-5  sm:pt-20 lg:flex lg:flex-row sm:pb-10">
      <div className="w-full left-side mt-5 pt-4  flex justify-end sm:mt-0   sm:pt-10 sm:justify-between lg:w-3/5">
        <img
          className="rounded-md w-full"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_800,h_800/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
          alt="Homem dentro do carro"
          layout="responsive"
          width={800}
          height={800}
        />
      </div>
      <div className="right-side w-full   lg:mt-10  flex-col sm:min-[500px]    lg:justify-center lg:w-2/3 lg:p-20">
        <h2 className="text-[36px] leading-9 md:text-[3.25rem] cta-text   sm:leading-tight ">
          {t("second-title")}
        </h2>
        <p className="text-black mt-4 sm:mt-6 font-UberMoveNormal">
          {t("second-subtitle")}
        </p>

        <div className="loginRedirect flex items-center mt-4 gap-5">
          <Link className="btn-start mr-4" to={`/${lang}/dirigir`}>
            {t("second-btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SecondSc;
