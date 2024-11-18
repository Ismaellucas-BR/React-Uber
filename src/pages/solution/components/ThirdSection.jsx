import React from "react";
import WomanTraveling from "../../../assets/svg/womantraveling.svg";
import ManTraveling from "../../../assets/svg/mantraveling.svg";
function ThirdSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl  mx-auto  pt-10 px-5 gap-5 sm:pt-10 md:gap-5 lg:flex sm:pb-10 md:items-start ">
        <h2 className="font-UberMoveBold text-3xl md:text-4xl md:w-2/4 md:leading-[3rem]">
          Como as empresas aproveitam a plataforma da Uber para Empresas
        </h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col justify-start w-full gap-5">
            <img
              src={WomanTraveling}
              className="hover:scale-125 transition-all"
              alt="Mulher com mala no aeroporto"
            />
            <h3 className="font-UberMoveBold text-[1.75rem] text-gray-33">
              Viagens a trabalho
            </h3>
          </div>
          <div className="flex flex-col justify-start w-full gap-5">
            <img
              src={ManTraveling}
              className="hover:scale-125 transition-all"
              alt="Mulher com mala no aeroporto"
            />
            <h3 className="font-UberMoveBold text-[1.75rem] text-gray-33">
              Viagens de cortesia
            </h3>
          </div>
        </div>
        <div className="md:mt-20">
          <h2 className="text-[1.75rem] font-UberMoveBold md:text-4xl">
            Comece a usar sem custos iniciais{" "}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
