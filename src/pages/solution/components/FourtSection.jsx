import React from "react";
import LogoZoom from "../../../assets/logo-zoom-360x202_2x.webp";
import LogoCoca from "../../../assets/logo-cocacola-360x202_2x.webp";
import LogoSamsung from "../../../assets/logo-samsung-360x202_2x.webp";
import BgVideo from "../../../assets/img-testimonial-657x371_2x.webp";
import IconYoutube from "../../../assets/svg/IconYoutube";

function FourtSection() {
  return (
    <section className="w-full">
      <div className="div-classes-iniciais bg-gray-f3">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-UberMoveBold text-[1.75rem] text-center">
            Mais de 170 mil empresas usam a nossa plataforma, incluindo a
            maioria das integrantes da lista Fortune 500. Faça como elas!
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <img src={LogoZoom} alt="Logo da Zoom" />
          <img src={LogoCoca} alt="Logo da Zoom" />
          <img src={LogoSamsung} alt="Logo da Zoom" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2
              className=" font-UberMoveMedium
             text-lg text-gray-33"
            >
              "Apenas o salário e alguns benefícios não bastam mais. É preciso
              ouvir com atenção os anseios e necessidades dos colaboradores. Por
              isso, optamos por oferecer créditos Uber, para que eles possam
              solicitar viagens a trabalho ou lazer com toda tranquilidade. Os
              colaboradores podem usar os créditos como quiserem."
            </h2>
            <p className=" font-UberMoveNormal text-base text-gray-33">
              <strong>Ryan Carter</strong>, Fundador e Diretor Executivo da
              Parachute Media
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${BgVideo})` }}
            className="flex justify-center items-center h-56 bg-cover bg-center bg-no-repeat"
          >
            <IconYoutube />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourtSection;
