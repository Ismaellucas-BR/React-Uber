import React from "react";
import BlogComponent from "../../../components/BlogComponent";
import CarFillingUp from "../../../assets/img-resource-1-360x360_2x-copy.webp";
import WomanGettingIntoTheCar from "../../../assets/img-resource-2-360x360_2x-copy.webp";
import Road from "../../../assets/img-resource-3-360x360_2x.jpg";
import { useTranslation } from "react-i18next";
function FifthSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full pb-10">
      <div className="bg-blue-00 flex flex-col items-center justify-center w-full h-[16.5rem]">
        <h2 className="font-UberMoveBold text-3xl text-white text-center md:text-4xl md:w-1/2 lead-[3rem]">
          {t("solutions.fifth-section.bg-section-title")}
        </h2>
      </div>
      <div className="div-classes-iniciais">
        <h2 className="w-full font-UberMoveBold text-3xl text-left md:text-4xl">
          {t("solutions.Blog-section.title")}
        </h2>
        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
          <BlogComponent
            image={CarFillingUp}
            title={t("solutions.Blog-section.item1.title")}
            show="true"
            titleBtn={t("solutions.Blog-section.item1.btn")}
            href="https://businesses.uber.com/rs/613-QPH-162/images/Executives_on_sustainability_UberforBusiness.pdf"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
          <BlogComponent
            image={WomanGettingIntoTheCar}
            title={t("solutions.Blog-section.item2.title")}
            show="true"
            titleBtn={t("solutions.Blog-section.item2.btn")}
            href="https://businesses.uber.com/rs/613-QPH-162/images/Uber%20for%20Business_The%20perks%20and%20benefits%20your%20employees%20want%20now.pdf?uclick_id=323cf7bb-0ca6-4b2a-bd08-273206d88850"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
          <BlogComponent
            image={Road}
            title={t("solutions.Blog-section.item3.title")}
            show="true"
            titleBtn={t("solutions.Blog-section.item3.btn")}
            href="https://businesses.uber.com/rs/613-QPH-162/images/Executives_on_sustainability_UberforBusiness.pdf?uclick_id=323cf7bb-0ca6-4b2a-bd08-273206d88850"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
        </div>
        <div className=" flex flex-col gap-3 font-UberMoveNormal text-[1rem] text-gray-33 mt-5">
          <span>
            {t("solutions.last-section.first-span")}
            <a className="underline ml-1" href="/getting-started">
              {t("solutions.last-section.tag-a")}
            </a>
            .
          </span>
          <span>{t("solutions.last-section.span2")}</span>
          <span>{t("solutions.last-section.span3")}</span>
          <span>{t("solutions.last-section.span4")}</span>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
