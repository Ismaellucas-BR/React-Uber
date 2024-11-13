import React from "react";
import FirstImage from "../../../assets/svg/ub4-gettingstarted-selfserve.svg";
import SecondImage from "../../../assets/svg/ub4-gettingstarted-assistance.svg";
function FirstSection() {
  return (
    <section className="bg-[#EFF3FE] text-center sm:h-auto  w-full  py-10 px-5 sm:pt-10 sm:pb-20">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <h2 className="font-UberMoveBold text-[2rem] md:text-[3.25rem] leading-9 sm:w-[47rem] sm:leading-[4rem]">
          Duas maneiras de começar a usar a plataforma da Uber para Empresas
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full text-center">
            <img
              className="w-full"
              src={FirstImage}
              alt="Desenho de mulher no computador"
            />
            <h3 className="font-UberMoveNormal text-lg mt-4 md:text-left">
              1. Uma abordagem de autoatendimento que<br></br> ajuda você a
              começar em poucos minutos
            </h3>
            <ul className="flex flex-col text-left mt-4 list-disc pl-16 font-UberMoveNormal gap-2">
              <li>
                Por tempo limitado, sua organização pode ganhar até R 1.000 em
                Créditos Uber para sua empresa ao gastar mais de R 10.000 nos
                primeiros 90 dias. Oferta sujeita a termos adicionais*
              </li>
              <li>
                A maneira mais rápida para pequenas empresas se cadastrarem
                quando precisarem de viagens ocasionais
              </li>
              <li>
                Lançamento simplificado de despesas e a possibilidade de pagar
                com um único cartão, sem taxas de serviço
              </li>
              <li>
                Acesso a todos os recursos do painel do coordenador, inclusive
                integração com as principais plataformas de despesas e viagens,
                acesso à equipe de suporte ao usuário, métricas de
                sustentabilidade e Central de Ajuda
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full text-center">
            <img
              className="w-full"
              src={SecondImage}
              alt="Desenho de mulher no computador"
            />
            <h3 className="font-UberMoveNormal text-lg mt-4 md:text-left">
              2. Uma experiência personalizada que se adapta às necessidades da
              sua empresa
            </h3>
            <ul className="flex flex-col text-left mt-4 list-disc pl-16 font-UberMoveNormal gap-2">
              <li>
                Para empresas de todos os portes que preferem falar com um
                agente
              </li>
              <li>
                Possibilidade de gerenciar várias formas de pagamento, além de
                lançamento simplificado de despesas, suporte para operações de
                faturamento e nenhuma taxa de serviço
              </li>
              <li>
                Suporte exclusivo, além de acesso a todos os recursos do painel
                do coordenador, como métricas de sustentabilidade e integração
                com as principais plataformas de despesas e viagens.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
