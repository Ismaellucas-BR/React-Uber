import Gps from "../../../assets/GPS-Tracking.jpg";
import Support24 from "../../../assets/24_7-Support.jpg";
import Familly from "../../../assets/family.jpg";
import { useTranslation } from "react-i18next";
function SixSectionDG() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-5 px-5 bg-white sm:pt-10 sm:flex sm:pb-10 md:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-52  lg:w-full">
          <h2 className="text-black text-3xl cta-text lg:mt-10 sm:text-3xl sm:leading-tight font-UberMoveBold">
            {t("Ride-page.Six-section.title")}
          </h2>
          <p className="text-black mt-4 text-lg font-UberMoveNormal lg:pr-[500px]">
            {t("Ride-page.Six-section.subtitle")}
          </p>
        </div>
        <div className="lg:flex lg:mt-5">
          <div className="loginRedirect flex flex-col mt-4 pr-14 md:mt-10 md:w-full lg:mt-0">
            <div className="w-12">
              <img
                src={Gps}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold  text-lg mt-4 mb-2">
              {t("Ride-page.Six-section.icons-cards.card1.title")}
            </h4>
            <p className="text-base font-UberMoveNormal">
              {t("Ride-page.Six-section.icons-cards.card1.content")}
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="link-underline text-black font-UberMoveNormal border-b pb-1 text-base">
                {t("Ride-page.Six-section.icons-cards.card1.btn")}
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
            <div className="w-12">
              <img
                src={Support24}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold mt-4 text-lg mb-2">
              {t("Ride-page.Six-section.icons-cards.card2.title")}
            </h4>
            <p className="text-base font-UberMoveNormal">
              {t("Ride-page.Six-section.icons-cards.card2.content")}
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="link-underline text-black font-UberMoveNormal border-b pb-1 text-base">
                {t("Ride-page.Six-section.icons-cards.card2.btn")}
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
            <div className="w-12">
              <img
                src={Familly}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold mt-4 text-lg mb-2">
              {t("Ride-page.Six-section.icons-cards.card3.title")}
            </h4>
            <p className="text-base font-UberMoveNormal">
              {t("Ride-page.Six-section.icons-cards.card3.content")}
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="link-underline text-black font-UberMoveNormal border-b pb-1 text-base">
                {t("Ride-page.Six-section.icons-cards.card3.btn")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SixSectionDG;
