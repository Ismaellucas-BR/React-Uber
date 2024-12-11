import React from "react";
import WomanWithCellPhone from "../../../assets/UBER_CDMX_M-DT1-A_001035_VS_R2-copy.webp";
import { useTranslation } from "react-i18next";
function FirstSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-black">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl  mx-auto  pt-10 px-5 bg-black sm:pt-10 md:gap-5 lg:flex sm:pb-0 ">
        <div className="left-side w-full  flex flex-col justify-center lg:ml-4 lg:h-screen lg:w-2/5">
          <h2 className="text-white text-4xl cta-text sm:text-5xl sm:leading-tight	font-UberMove font-medium">
            {t("solutions.first-section.title")}
          </h2>
          <p className="text-white font-UberMove font-normal mt-3">
            {t("solutions.first-section.subtitle")}
          </p>
        </div>
        <div className="right-side mt-10  flex justify-end pb-10 lg:mt-0 lg:w-3/5 lg:px-28">
          <img
            className="rounded-md w-full "
            src={WomanWithCellPhone}
            alt="Mulher saindo do carro"
            layout="intrinsic"
            width={558}
            height={298}
          />
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
