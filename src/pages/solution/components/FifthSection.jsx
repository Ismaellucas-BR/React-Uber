import React from "react";
import BlogComponent from "../../../components/BlogComponent";
import CarFillingUp from "../../../assets/img-resource-1-360x360_2x-copy.webp";
import WomanGettingIntoTheCar from "../../../assets/img-resource-2-360x360_2x-copy.webp";
import Road from "../../../assets/img-resource-3-360x360_2x.jpg";
function FifthSection() {
  return (
    <section className="w-full pb-10">
      <div className="bg-blue-00 flex flex-col items-center justify-center w-full h-[16.5rem]">
        <h2 className="font-UberMoveBold text-3xl text-white text-center md:text-4xl w-1/2 lead-[3rem]">
          9 de cada 10 usuários recomendam a Uber para Empresas³
        </h2>
      </div>
      <div className="div-classes-iniciais">
        <h2 className="w-full font-UberMoveBold text-3xl text-left md:text-4xl">
          Quer saber mais?{" "}
        </h2>
        <div className="md:flex md:gap-10">
          <BlogComponent
            image={CarFillingUp}
            title="Como reduzir a pegada de carbono das viagens a trabalho"
            show="true"
            titleBtn="Veja como funciona"
            href="https://businesses.uber.com/rs/613-QPH-162/images/Executives_on_sustainability_UberforBusiness.pdf"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
          <BlogComponent
            image={WomanGettingIntoTheCar}
            title="As vantagens e recompensas mais desejadas por seus colaboradores"
            show="true"
            titleBtn="Confira como funciona"
            href="https://businesses.uber.com/rs/613-QPH-162/images/Uber%20for%20Business_The%20perks%20and%20benefits%20your%20employees%20want%20now.pdf?uclick_id=323cf7bb-0ca6-4b2a-bd08-273206d88850"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
          <BlogComponent
            image={Road}
            title="O caminho para a sustentabilidade: executivos discutem seus esforços em direção à neutralidade de carbono"
            show="true"
            titleBtn="Confira mais a seguir"
            href="https://businesses.uber.com/rs/613-QPH-162/images/Executives_on_sustainability_UberforBusiness.pdf?uclick_id=323cf7bb-0ca6-4b2a-bd08-273206d88850"
            classImage="h-[24rem]"
            classDiv="w-[24rem]"
          />
        </div>
        <div className=" flex flex-col gap-3 font-UberMoveNormal text-[1rem] text-gray-33 mt-5">
          <span>
            A disponibilidade de produtos e recursos pode variar de acordo com o
            mercado e a localização. Para obter mais informações, clique{" "}
            <a className="underline" href="/getting-started">
              aqui
            </a>
            .
          </span>
          <span>
            ¹Com base em entrevistas com mais de 275 usuários da plataforma da
            Uber para Empresas no mundo todo em fevereiro de 2023. Os usuários
            confirmam que conseguiram reduzir os custos de transporte terrestre
            e/ou refeições por meio de uma melhor conformidade.
          </span>
          <span>
            ²O Uber Planet só está ativo em algumas cidades. Além disso, a
            disponibilidade pode ser limitada fora do centro das cidades.
          </span>
          <span>
            ³Com base em uma pesquisa feita em novembro de 2021 encomendada pela
            plataforma da Uber, que fez a seguinte pergunta a 323 usuários da
            Uber para Empresas: "Qual é a probabilidade de você recomendar a
            plataforma da Uber para Empresas a um colega ou alguém da sua rede
            profissional?"
          </span>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
