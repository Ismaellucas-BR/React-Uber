import React from "react";
import { useTranslation } from "react-i18next";

function VerticalTimeLine() {
  const { t } = useTranslation();
  const positionLineAndPoint = `${(window.innerHeight * 38) / 100}px`;
  const items = [
    {
      title: "Personalize seus programas de refeições e viagens",
      description:
        "Defina suas políticas, garanta a conformidade com as regras estabelecidas de viagens e despesas e obtenha mais informações sobre viagens e refeições. Integre facilmente as principais plataformas de despesas para lançar os gastos facilmente e sem pagar nenhuma taxa de serviço.",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_406,w_720/v1709058424/assets/6d/03ea1c-382f-4002-800d-36655cf65c51/original/ilo-content_connected-01-360x202_2x-%282%29-copy.png",
    },
    {
      title: "Adicione seus colaboradores à sua conta quando quiser",
      description:
        "Adicione pessoas, equipes específicas ou toda a sua empresa ao mesmo tempo. Depois que receberem os convites, seus colaboradores poderão adicionar um Perfil Corporativo à conta da Uber e solicitar viagens ou fazer pedidos relacionados a trabalho.",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_406,w_720/v1709058511/assets/b8/14c48a-d041-4a84-9265-7da7e26ceee0/original/ilo-content_connected-02-360x202_2x-%281%29-copy.png",
    },
    {
      title: "Defina comodidades para seus clientes",
      description:
        "Envie créditos Uber na forma de Gift Cards e vouchers para viagens, refeições e muito mais de modo simples. Para oferecer uma experiência conveniente e fácil, você pode até mesmo pedir viagens em nome de outras pessoas.",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_406,w_720/v1709058567/assets/07/67e0e9-464b-4221-9a71-3888bdf55b56/original/ilo-content_connected-03-360x202_2x-%281%29-copy.png",
    },
  ];

  return (
    <section className="div-classes-iniciais justify-start items-start">
      <div className="md:mt-10 md:mb-5 pb-10">
        <h2 className="text-[1.75rem] font-UberMoveBold md:text-4xl">
          {t("solutions.fourt-section.title")}
        </h2>
      </div>
      <div className="relative mx-auto">
        {/* Linha vertical */}
        <div className="absolute top-0 left-[4%] transform -translate-x-1/2 w-[1px] bg-black h-full sm:left-[36%] sm:hidden lg:flex"></div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div key={index} className={`flex items-center flex-row relative`}>
              <div className="absolute top-0 left-[4%] transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-none sm:left-[36%] sm:hidden lg:flex"></div>
              <div className="flex flex-col sm:flex-row w-full pl-10">
                <div className="w-full sm:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[22.5rem] h-[12.75rem] shadow-md"
                  />
                </div>

                <div className=" flex flex-col items-start w-full sm:w-2/3  h-[12.75rem] justify-start sm:px-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerticalTimeLine;
