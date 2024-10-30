import React from "react";
import FAQ from "../../../components/faq/FAQ";

function Faqsection() {
  return (
    <div className="loginRedirect flex flex-col my-5  lg:pr-4 w-full max-w-7xl lg:mx-auto py-5 px-10">
      <h2 className="text-gray-900 text-3xl cta-text mb-8 sm:mt-36 sm:text-5xl sm:leading-tight font-txt-bold md:mt-10 md:text-[36px]">
        Perguntas frequentes
      </h2>
      <div className="py-4">
        <FAQ />
      </div>
    </div>
  );
}

export default Faqsection;
