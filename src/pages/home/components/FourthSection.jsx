import React from "react";
import fleet from "../../../../public/assets/fleet-management.webp";
function FourthSection() {
  return (
    <section className=" items-center justify-between flex flex-col w-full max-w-7xl mx-auto px-6 sm:pt-5 sm:flex sm:flex-row">
      <div className="left-side mt-5 pt-4 order-2  flex justify-end sm:mt-0 sm:w-3/5 sm:order-1 sm:pt-10 sm:justify-between">
        <img className="rounded-md" src={fleet} alt="Homem dentro do carro" />
      </div>
      <div className="right-side w-full   mt-10 order-1 flex-col sm:h-screen sm:w-2/5 sm:order-2 ">
        <h4 className="text-black pr-6 text-4xl cta-text sm:mt-44 sm:text-4xl sm:leading-tight	">
          Ganhe dinheiro alugando seu carro
        </h4>
        <p className="text-black mt-4 sm:mt-6">
          Conecte-se com milhares de motoristas parceiros e ganhe mais por
          semana com as ferramentas gratuitas de gerenciamento da Uber para
          locadores de veículos.
        </p>
        <div className="loginRedirect flex items-center mt-4">
          <a className="btn-start mr-4 ">Começar</a>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
