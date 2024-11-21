import ThirdSection from "./components/ThirdSection";
import FifthSection from "./components/FifthSection";
import SecondSc from "./components/SecondSection";
import FirtsSection from "./components/FirstSection";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <Suspense fallback="loading">
        <FirtsSection />
      </Suspense>
      <SecondSc />
      <ThirdSection />
      <FifthSection />
    </main>
  );
}

export default Home;
