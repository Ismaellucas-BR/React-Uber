import React from "react";
import Accondion from "./Accordion";
import { useTranslation } from "react-i18next";
import TranslationData from "../../../public/locales/pt/translation.json";

function FAQ() {
  const { t, i18n } = useTranslation();
  return (
    <div className=" bg-white rounded-lg ">
      <Accondion
        title={t("Ride-page.FAQ-Component.item1.title")}
        content={t("Ride-page.FAQ-Component.item1.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item2.title")}
        content={t("Ride-page.FAQ-Component.item2.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item3.title")}
        content={t("Ride-page.FAQ-Component.item3.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item4.title")}
        content={t("Ride-page.FAQ-Component.item4.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item5.title")}
        content={t("Ride-page.FAQ-Component.item5.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item6.title")}
        content={t("Ride-page.FAQ-Component.item6.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item7.title")}
        content={t("Ride-page.FAQ-Component.item7.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item8.title")}
        content={t("Ride-page.FAQ-Component.item8.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item9.title")}
        content={t("Ride-page.FAQ-Component.item9.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item10.title")}
        content={t("Ride-page.FAQ-Component.item10.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item11.title")}
        content={t("Ride-page.FAQ-Component.item11.content")}
      />
      <Accondion
        title={t("Ride-page.FAQ-Component.item12.title")}
        content={t("Ride-page.FAQ-Component.item12.content")}
      />
    </div>
  );
}

export default FAQ;
