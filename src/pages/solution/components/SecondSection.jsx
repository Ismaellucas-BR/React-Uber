import React from "react";
import BadgeMoney from "../../../assets/svg/badge-money-64x64.svg";
import BadgeSafety from "../../../assets/svg/badge-safety_report-64x64.svg";
import BadgeStar from "../../../assets/svg/badge-star-64x64.svg";
import BadgePlant from "../../../assets/svg/badge-plant-64x64.svg";
function SecondSection() {
  return (
    <section className="w-full bg-black">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl  mx-auto  pt-10 px-5 bg-black gap-5 sm:pt-10 md:gap-5 lg:flex sm:pb-10 ">
        <h2 className="text-white font-UberMoveBold text-3xl">
          Uma plataforma global baseada na maior rede de viagens por aplicativos
          do mundo{" "}
        </h2>
        <div className="flex flex-col gap-10 text-white mt-5">
          <div className="div-badge">
            <img src={BadgeMoney} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                Reduza os custos em até 10% ao aumentar a conformidade com seu
                programa
              </h3>
              <p className="text-base font-UberMoveNormal">
                Os usuários confirmaram que os custos de transporte terrestre e
                refeições foram reduzidos.¹ Gerencie as despesas, monitore o uso
                dos recursos e aproveite as melhores ferramentas de
                conformidade.
              </p>
            </div>
          </div>
          <div className="div-badge">
            <img src={BadgePlant} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                Alcance as metas de sustentabilidade com informações práticas
              </h3>
              <p className="text-base font-UberMoveNormal">
                Acompanhe as emissões de CO₂ de cada viagem em um painel
                exclusivo da Uber para Empresas. Os dados disponíveis ajudarão
                você a gerenciar suas metas e usufruir de soluções sustentáveis,
                como o Uber Planet.²
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 text-white mt-5">
          <div className="div-badge">
            <img src={BadgeStar} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                Ofereça uma experiência exclusiva para suas equipes
              </h3>
              <p className="text-base font-UberMoveNormal">
                Além de lançamento de despesas simplificado e suporte
                prioritário, os colaboradores de cidades selecionadas têm acesso
                a opções de viagem como o Uber Business Comfort, que permitem
                que sua equipe aproveite viagens premium.
              </p>
            </div>
          </div>
          <div className="div-badge">
            <img src={BadgeSafety} width={48} alt="Icone de dinheiro" />
            <div className="div-badge-text">
              <h3 className="text-lg font-UberMoveNormal">
                Priorize a proteção da sua empresa
              </h3>
              <p className="text-base font-UberMoveNormal">
                A Uber para Empresas envia aos usuários corporativos
                notificações adicionais relacionadas a acidentes. Nosso
                Relatório de Segurança dos EUA mais recente mostra que 99,9% das
                viagens pelo app da Uber são concluídas sem nenhum incidente de
                segurança reportado.
              </p>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}

export default SecondSection;
