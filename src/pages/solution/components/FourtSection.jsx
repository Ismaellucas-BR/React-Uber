import React from "react";
import LogoZoom from "../../../assets/logo-zoom-360x202_2x.webp";
import LogoCoca from "../../../assets/logo-cocacola-360x202_2x.webp";
import LogoSamsung from "../../../assets/logo-samsung-360x202_2x.webp";
import BgVideo from "../../../assets/img-testimonial-657x371_2x.webp";
import IconYoutube from "../../../assets/svg/IconYoutube";
import { useTranslation } from "react-i18next";

function FourtSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-gray-f3">
      <div className="div-classes-iniciais  pb-10">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h2 className="font-UberMoveBold text-[1.75rem] text-center md:text-4xl">
            {t("solutions.fifth-section.title")}
          </h2>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <img
            className="md:w-[22.5rem] md:h-[12.75rem]"
            src={LogoZoom}
            alt="Logo da Zoom"
          />
          <img
            className="md:w-[22.5rem] md:h-[12.75rem]"
            src={LogoCoca}
            alt="Logo da Zoom"
          />
          <img
            className="md:w-[22.5rem] md:h-[12.75rem]"
            src={LogoSamsung}
            alt="Logo da Zoom"
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-28 ">
          <div className="flex flex-col gap-3 md:w-1/3 md:justify-center">
            <h2
              className=" font-UberMoveMedium
             text-lg text-gray-33"
            >
              {t("solutions.fifth-section.content")}
            </h2>
            <p className=" font-UberMoveNormal text-base text-gray-33">
              <strong>Ryan Carter</strong>,{" "}
              {t("solutions.fifth-section.sub-content")}
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${BgVideo})` }}
            className="flex justify-center items-center h-56 bg-cover bg-center bg-no-repeat md:w-2/3 md:h-[23.25rem]"
          >
            <IconYoutube />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourtSection;
