import React from "react";
import WomanTraveling from "../../../assets/svg/womantraveling.svg";
import ManTraveling from "../../../assets/svg/mantraveling.svg";
import { useTranslation } from "react-i18next";
function ThirdSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl  mx-auto  pt-10 px-5 gap-5 sm:pt-10 md:gap-5 lg:flex sm:pb-10 md:items-start ">
        <h2 className="font-UberMoveBold text-3xl md:text-4xl md:w-2/4 md:leading-[3rem]">
          {t("solutions.third-section.title")}
        </h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col justify-start w-full gap-5">
            <img
              src={WomanTraveling}
              className="hover:scale-125 transition-all"
              alt="Mulher com mala no aeroporto"
            />
            <h3 className="font-UberMoveBold text-[1.75rem] text-gray-33">
              {t("solutions.third-section.item1.title")}
            </h3>
          </div>
          <div className="flex flex-col justify-start w-full gap-5">
            <img
              src={ManTraveling}
              className="hover:scale-125 transition-all"
              alt="Mulher com mala no aeroporto"
            />
            <h3 className="font-UberMoveBold text-[1.75rem] text-gray-33">
              {t("solutions.third-section.item2.title")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
