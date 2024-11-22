import { useTranslation } from "react-i18next";
function Appparceiro() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-phone bg-cover bg-center h-[500px] hidden md:block">
      <div className="left-side    flex-col justify-center flex  h-full  ml-10 pr-20  flex-grow w-2/4 lg:ml-20 lg:pr-52">
        <h2 className="text-black text-3xl cta-text sm:mt-36 sm:text-5xl sm:leading-tight font-UberMoveBold md:mt-0">
          {t("Ride-page.AppParceiro-section.title")}
        </h2>
        <p className=" font-UberMoveNormal text-black mt-4 text-base ">
          {t("Ride-page.AppParceiro-section.subtitle")}
        </p>
      </div>
    </section>
  );
}

export default Appparceiro;
