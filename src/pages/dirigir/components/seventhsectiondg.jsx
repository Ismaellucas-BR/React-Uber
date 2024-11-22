import TDrive from "../../../assets/T_Driver_Campaign-Carbon-arabic2x.webp";
import { useTranslation } from "react-i18next";
function SeventhSectionDG() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full flex sm:hidden ">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-5 px-5 sm:pt-10 sm:flex sm:pb-10 md:flex md:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 sm:h-auto sm:w-2/5 md:w-full lg:hidden">
          <h2 className="text-black text-3xl cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-UberMoveBold md:mt-0">
            {t("Ride-page.Seventh-section.title")}
          </h2>
          <p className="text-black font-UberMoveNormal mt-4 text-base ">
            {t("Ride-page.Seventh-section.subtitle")}
          </p>
          <div className="mt-4 md:w-full sm:hidden">
            <img
              className=""
              src={TDrive}
              width={800}
              height={800}
              alt="Celular com mapa de cidade na tela"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeventhSectionDG;
