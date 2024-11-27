import BlogComponent from "../../../components/BlogComponent";
import { useTranslation } from "react-i18next";
function FourthSectiondg() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full  mt-10 h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-black text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-UberMoveBold md:mt-3">
            {t("Ride-page.Fourth-section.title")}
          </h2>
          <div className="md:flex md:gap-10 lg:w-full">
            <BlogComponent
              image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1581113810/assets/92/557e45-e7d5-44eb-90e1-35871c82f0ad/original/UberIM_004994-medium.jpg"
              title={t("Ride-page.Fourth-section.icons-cards.card1.title")}
              content={t("Ride-page.Fourth-section.icons-cards.card1.content")}
              titleBtn={t("Ride-page.Fourth-section.icons-cards.card1.btn")}
              showDiv="Não"
              divClass="md:w-1/2"
            />
            <BlogComponent
              image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1555099943/assets/d3/addd33-a2e2-406c-8040-6bac00bb7b8b/original/United-States-Vehicle-Solutions-Driver-With-Car4b.jpg"
              title={t("Ride-page.Fourth-section.icons-cards.card2.title")}
              content={t("Ride-page.Fourth-section.icons-cards.card2.content")}
              titleBtn={t("Ride-page.Fourth-section.icons-cards.card2.btn")}
              showDiv="Não"
              divClass="md:w-1/2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSectiondg;
