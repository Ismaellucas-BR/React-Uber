import React from "react";
import Accondion from "../../../components/faq/Accordion";
import Secondsection from "../../../components/StandardModule";
import BlogComponent from "../../../components/BlogComponent";
import BoxWithIcon from "../../../components/BoxWithIcon";
import { useTranslation } from "react-i18next";
function FirstSectionUs() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section>
        <div
          className="bg-us-bg bg-center bg-no-repeat bg-cover w-full h-[500px] relative "
          style={{
            backgroundImage:
              "url('https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg')",
          }}
        >
          <h1 className="absolute bottom-10 left-5 text-white font-UberMoveBold text-4xl md:bottom-20 md:left-10 md:text-5xl  lg:text-5xl lg:bottom-24 lg:left-24">
            {t("AboutUs.title")}
          </h1>
        </div>
      </section>
      <section className="px-5 py-10  lg:pl-24 lg:pr-96 lg:pt-14 lg:pb-7">
        <h2 className="text-black text-3xl lg:text-4xl font-UberMoveBold font-bold">
          {t("AboutUs.h2-number1")}
        </h2>
        <div className="mt-5 lg:pr-28 lg:pt-6">
          <span className="text-black text-base font-UberMoveNormal font-normal">
            {t("AboutUs.span-number1")}
          </span>
        </div>
      </section>
      <section className="pr-10 lg:pl-24 lg:pr-24">
        <div className="px-5">
          <Accondion
            title={t("AboutUs.Accondion.title")}
            content={t("AboutUs.Accondion.span")}
            showContent2={true}
            content2={t("AboutUs.Accondion.span2")}
            showContent3={true}
            content3={t("AboutUs.Accondion.span3")}
          />
        </div>
      </section>

      <section
        className="px-5 lg:pl-24 lg:pr-96 pt-14 pb-7 bg-ceo-bg bg-center bg-no-repeat bg-cover lg:mt-10"
        style={{
          backgroundImage:
            "url('https://www.uber-assets.com/image/upload/v1590112350/assets/ba/e2d6c0-0335-4c4c-ad45-04097c24e819/original/dara-desktop.jpg')",
        }}
      >
        <div className="flex flex-col h-[380px] gap-5 w-2/4">
          <h1 className="  text-white font-UberMoveBold text-4xl md:text-5xl  lg:text-5xl lg:leading-snug ">
            {t("AboutUs.letter-section.title")}
          </h1>
          <span className="text-white text-base font-UberMoveNormal">
            {t("AboutUs.letter-section.subtitle")}
          </span>
          <a
            target="_blank"
            className="w-auto  max-w-60  bg-black rounded-lg py-3 px-3 text-white text-center lg:mt-2"
            href="https://investor.uber.com/a-letter-from-our-ceo/?uclick_id=bf765484-6082-4c24-863d-1244774412a7"
          >
            {t("AboutUs.letter-section.btn")}
          </a>
        </div>
      </section>

      <Secondsection
        sectionClass="flex-col-reverse min-[500px] px-6 sm:flex-col lg:flex-row"
        divRightClass="flex  items-baseline w-full"
        image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1603308507/assets/f6/0c9607-ae68-43d5-9e88-79f3011d88ee/original/Sustainability.jpg"
        title={t("AboutUs.blog-sections.first-group.item1.title")}
        imageClasse="rounded-none"
        h2Classe="text-[28px] lg:text-2x1 text-gray-800"
        content={t("AboutUs.blog-sections.first-group.item1.subtitle")}
        contentClasse="text-[18px]"
      />
      <Secondsection
        sectionClass=" min-[500px] lg:mt-20 px-6 sm:flex-col lg:flex-row"
        divRightClass="flex items-baseline"
        image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg"
        title={t("AboutUs.blog-sections.first-group.item2.title")}
        imageClasse="rounded-none"
        h2Classe="text-[28px] lg:text-2x1 text-gray-800"
        content={t("AboutUs.blog-sections.first-group.item2.subtitle")}
        contentClasse="text-[18px]"
      />
      <Secondsection
        sectionClass=" p-0   min-[500px] lg:flex-row-reverse "
        leftSideClass="lg=w-1/6"
        divRightClass="flex items-baseline px-6 lg:5/6"
        image="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1555433729/assets/13/b383de-93a1-4327-8812-91de86e3edd9/original/_background-01.svg"
        title={t("AboutUs.blog-sections.first-group.item3.title")}
        imageClasse="rounded-none lg:ml-10"
        h2Classe="lg:text-2x1 text-gray-800"
        content={t("AboutUs.blog-sections.first-group.item3.subtitle")}
        contentClasse="text-[18px]"
      />
      <section className="first-section-black items-center justify-between lg:block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-gray-900 text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-UberMoveBold md:mt-3">
            {t("AboutUs.blog-sections.second-group.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:w-full">
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1555540623/assets/cb/9b789f-167d-4a57-ac3a-c23060bfa9e8/original/170830_DaraAllHands_0I7A9940_R2.jpg"
              }
              title={t("AboutUs.blog-sections.second-group.item1.title")}
              content={t("AboutUs.blog-sections.second-group.item1.subtitle")}
              divClass="w-full"
              showDiv="Não" //deixar vazio para aparecer
            />
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1619719896/assets/96/8d24b6-76cd-4dcb-8b89-e3125c603538/original/test2259.jpg"
              }
              title={t("AboutUs.blog-sections.second-group.item2.title")}
              content={t("AboutUs.blog-sections.second-group.item2.subtitle")}
              divClass="w-full"
              showDiv="Não" //deixar vazio para aparecer
            />
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1664822806/assets/b6/c8a24d-8e79-45a1-9e03-adead244ef0a/original/about-ec-image-01-thumb.png"
              }
              title={t("AboutUs.blog-sections.second-group.item3.title")}
              content={t("AboutUs.blog-sections.second-group.item3.subtitle")}
              divClass="w-full"
              showDiv="Não" //deixar vazio para aparecer
            />
          </div>
        </div>
      </section>
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-gray-900 text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-txt-bold md:mt-3">
            {t("AboutUs.blog-sections.third-group.title")}
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 ">
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg"
              title={t("AboutUs.blog-sections.third-group.item1.title")}
              content={t("AboutUs.blog-sections.third-group.item1.subtitle")}
            />
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg"
              title={t("AboutUs.blog-sections.third-group.item2.title")}
              content={t("AboutUs.blog-sections.third-group.item2.subtitle")}
            />
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg"
              title={t("AboutUs.blog-sections.third-group.item3.title")}
              content={t("AboutUs.blog-sections.third-group.item3.subtitle")}
            />
          </div>
        </div>
      </section>
      <section className="mt-10 flex-col bg-[#f6f6f6] w-full justify-center flex lg:py-5 lg:flex-row">
        <div className="leftside p-5 pt-5  lg:w-1/2 lg:p-20 flex flex-col space-y-5 gap-8">
          <h2 className="text-4xl text-[rgb(51, 51, 51)] text-uber font-UberMoveBold lg:text-[52px] leading-tight">
            {t("AboutUs.last-section.title")}
          </h2>
        </div>
        <div className="rightside lg:w-1/2 flex flex-col justify-center">
          <img
            className="w-full"
            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
            alt="globo terrestre"
          />
        </div>
      </section>
    </>
  );
}

export default FirstSectionUs;
