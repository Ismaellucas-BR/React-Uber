import React from "react";
import FirstImage from "../../../assets/svg/ub4-gettingstarted-selfserve.svg";
import SecondImage from "../../../assets/svg/ub4-gettingstarted-assistance.svg";
import { useTranslation } from "react-i18next";
function FirstSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#EFF3FE] text-center sm:h-auto  w-full  py-10 px-5 sm:pt-10 sm:pb-20">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <h2 className="font-UberMoveBold text-[2rem] md:text-[3.25rem] leading-9 sm:w-[47rem] sm:leading-[4rem]">
          {t("getting-started.title")}
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full text-center">
            <img
              className="w-full"
              src={FirstImage}
              alt="Desenho de mulher no computador"
            />
            <h3 className="font-UberMoveNormal text-lg mt-4 md:text-left">
              {t("getting-started.left-side.title")}
            </h3>
            <ul className="flex flex-col text-left mt-4 list-disc pl-16 font-UberMoveNormal gap-2">
              <li>{t("getting-started.left-side.itens-list.item1")}</li>
              <li>{t("getting-started.left-side.itens-list.item2")}</li>
              <li>{t("getting-started.left-side.itens-list.item3")}</li>
              <li>{t("getting-started.left-side.itens-list.item4")}</li>
            </ul>
          </div>
          <div className="flex flex-col w-full text-center">
            <img
              className="w-full"
              src={SecondImage}
              alt="Desenho de mulher no computador"
            />
            <h3 className="font-UberMoveNormal text-lg mt-4 md:text-left">
              {t("getting-started.right-side.title")}
            </h3>
            <ul className="flex flex-col text-left mt-4 list-disc pl-16 font-UberMoveNormal gap-2">
              <li>{t("getting-started.left-side.itens-list.item1")}</li>
              <li>{t("getting-started.left-side.itens-list.item2")}</li>
              <li>{t("getting-started.left-side.itens-list.item3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
