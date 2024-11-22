import DriverOverview from "../../../assets/Driveroverview.jpg";
import CarFrontFilled from "../../../assets/car_front_filled.jpg";
import CredCardFilled from "../../../assets/credit_card_filled_1.jpg";
import Support from "../../../assets/support.jpg";
import { useTranslation } from "react-i18next";
function ThirdSectiondg() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-white">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-10 px-5 bg-white sm:py-14 sm:flex sm:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 sm:h-auto">
          <h2 className="text-gray-900 text-2xl cta-text sm:mt-3 lg:text-4xl sm:leading-tight	">
            {t("Ride-page.Third-section.title")}
          </h2>
          <div className="flex justify-center lg:px-10 lg:mt-5">
            <img
              className="rounded-md w-12/12 my-20  lg:mt-5 lg:w-9/12"
              src={DriverOverview}
              alt="Casal dentro do carro"
              layout="responsive"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="w-full flex flex-col gap-2 lg:w-1/3">
            <div className="w-5">
              <img
                src={CarFrontFilled}
                alt="icone de carro"
                layout="responsive"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold text-base">
              {t("Ride-page.Third-section.icons-cards.card1.title")}
            </h4>
            <p className="text-[16px] font-UberMoveNormal">
              {t("Ride-page.Third-section.icons-cards.card1.content")}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 my-10 lg:w-1/3 lg:my-0">
            <div className="w-5">
              <img
                src={CredCardFilled}
                alt="icone de cartão de credito"
                layout="responsive"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold text-base">
              {t("Ride-page.Third-section.icons-cards.card2.title")}
            </h4>
            <p className="text-[16px] font-UberMoveNormal">
              {t("Ride-page.Third-section.icons-cards.card2.content")}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 lg:w-1/3">
            <div className="w-5">
              <img
                src={Support}
                alt="Mulher saindo do carro"
                layout="responsive"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMoveBold text-base">
              {t("Ride-page.Third-section.icons-cards.card3.title")}
            </h4>
            <p className="text-[16px] font-UberMoveNormal">
              {t("Ride-page.Third-section.icons-cards.card3.content")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThirdSectiondg;
