import RideWithUber from "../../../assets/Ride-with-Uber.webp";
import { useTranslation } from "react-i18next";
function FirtsSection() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-black">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl  mx-auto  pt-10 px-5 bg-black sm:pt-20 md:gap-5 lg:flex sm:pb-10 ">
        <div className="left-side w-full   flex-col lg:ml-4 lg:h-screen lg:w-2/5">
          <h2 className="text-white text-4xl cta-text lg:mt-36 sm:text-5xl sm:leading-tight	font-UberMove font-medium">
            {t("first-title")}
          </h2>

          <p className="text-white font-UberMoveNormal">
            {t("first-subtitle")}
          </p>
        </div>
        <div className="right-side mt-10  flex justify-end pb-10 lg:mt-0 lg:w-3/5 lg:px-28">
          <img
            className="rounded-md w-full "
            src={RideWithUber}
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

export default FirtsSection;
