import React from "react";
import BadgeMoney from "../../../assets/svg/badge-money-64x64.svg";
import BadgeSafety from "../../../assets/svg/badge-safety_report-64x64.svg";
import BadgeStar from "../../../assets/svg/badge-star-64x64.svg";
import BadgePlant from "../../../assets/svg/badge-plant-64x64.svg";
import { useTranslation } from "react-i18next";
function SecondSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-black">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl  mx-auto  pt-10 px-5 bg-black gap-5 sm:pt-10 md:gap-5 lg:flex sm:pb-10 md:items-start">
        <h2 className="w-full text-left text-white font-UberMoveBold text-3xl md:text-4xl md:w-2/3">
          {t("solutions.second-section.title")}
        </h2>
        <div className="flex flex-col gap-10 text-white mt-5 md:flex-row">
          <div className="div-badge">
            <img src={BadgeMoney} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                {t("solutions.second-section.item1.title")}
              </h3>
              <p className="text-base font-UberMoveNormal">
                {t("solutions.second-section.item1.subtitle")}
              </p>
            </div>
          </div>
          <div className="div-badge">
            <img src={BadgePlant} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                {t("solutions.second-section.item2.title")}
              </h3>
              <p className="text-base font-UberMoveNormal">
                {t("solutions.second-section.item2.subtitle")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 text-white mt-5 md:flex-row">
          <div className="div-badge">
            <img src={BadgeStar} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                {t("solutions.second-section.item3.title")}
              </h3>
              <p className="text-base font-UberMoveNormal">
                {t("solutions.second-section.item3.subtitle")}
              </p>
            </div>
          </div>
          <div className="div-badge">
            <img src={BadgeSafety} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                {t("solutions.second-section.item4.title")}
              </h3>
              <p className="text-base font-UberMoveNormal">
                {t("solutions.second-section.item4.subtitle")}
              </p>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}

export default SecondSection;
