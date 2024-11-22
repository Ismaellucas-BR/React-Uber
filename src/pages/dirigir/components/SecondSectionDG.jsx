import BgYellow from "../../../assets/bgyellow.webp";
import { useTranslation } from "react-i18next";
function SecondSectiondg() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full  border-t border-white sm:h-screen">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-10 px-5  sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 sm:pb-10   lg:w-1/2">
          <img
            className="rounded-md "
            src={BgYellow}
            layout="intrinsic"
            width={550}
            height={550}
            alt="Mulher saindo do carro"
          />
        </div>
        <div className="right-side mt-5  justify-end pb-10 sm:mt-0 sm:w-1/2  lg:flex lg:flex-col lg:justify-start lg:pl-32">
          <h2 className="text-gray-900 text-3xl cta-text sm:mt-10 sm:text-4xl sm:leading-tight font-UberMoveBold">
            {t("Ride-page.Second-section.title")}
          </h2>
          <div className="text-black mt-4 text-base font-UberMoveNormal ">
            <span>{t("Ride-page.Second-section.subtitle")}</span>
            <br></br>
            <br></br>
            <span>{t("Ride-page.Second-section.subtitle2")}</span>
            <br></br>
            <br></br>
            <span>{t("Ride-page.Second-section.subtitle3")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSectiondg;
