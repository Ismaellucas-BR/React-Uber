import React from "react";
import Accondion from "../../../components/faq/Accordion";
import Secondsection from "../../../components/StandardModule";
import BlogComponent from "../../../components/BlogComponent";
import BoxWithIcon from "../../../components/BoxWithIcon";
function FirstSectionUs() {
  return (
    <>
      <section>
        <div
          className="bg-us-bg bg-center bg-no-repeat bg-cover w-full h-[500px] relative "
          style={{
            backgroundImage:
              "url('https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg')",
          }}
        >
          <h1 className="absolute bottom-10 left-5 text-white font-UberMoveBold text-4xl md:bottom-20 md:left-10 md:text-5xl  lg:text-5xl lg:bottom-24 lg:left-24">
            Quem somos
          </h1>
        </div>
      </section>
      <section className="px-5 py-10  lg:pl-24 lg:pr-96 lg:pt-14 lg:pb-7">
        <h2 className="text-black text-3xl lg:text-4xl font-UberMoveBold font-bold">
          Trabalhamos para melhorar a mobilidade das pessoas em todo o mundo
        </h2>
        <div className="mt-5 lg:pr-28 lg:pt-6">
          <span className="text-black text-base font-UberMoveNormal font-normal">
            Mobilizamos o mundo. É nossa força vital. Corre por nossas veias. É
            o que nos tira da cama todas as manhãs. Isso nos leva a reimaginar
            constantemente como podemos nos mover melhor. Para você. Por todos
            os destinos que te esperam. Por tudo o que você quer alcançar. Para
            todas as suas formas de ganhar dinheiro. No mundo todo. Em tempo
            real. Na incrível velocidade do agora.
          </span>
        </div>
      </section>
      <section className="pr-10 lg:pl-24 lg:pr-24">
        <div className="px-5">
          <Accondion
            title="Leia a declaração completa sobre a nossa missão"
            content="Somos a Uber. Fazemos acontecer. Somos incansáveis na nossa missão de ajudar as pessoas a ir a qualquer lugar, conseguir o que quiserem e ganhar dinheiro do jeito delas. Mobilizamos o mundo. É nossa força vital. Corre por nossas veias. É o que nos tira da cama todas as manhãs. Isso nos leva a reimaginar constantemente como podemos nos mover melhor. Para você. Por todos os destinos que esperam você. Por tudo o que você quer alcançar. Para todas as formas de ganhar dinheiro. No mundo todo. Em tempo real. Na incrível velocidade do agora.

                Somos uma empresa de tecnologia que faz a ponte entre o mundo físico e o digital, para que o movimento aconteça com o simples toque de um botão. Porque acreditamos em um mundo onde a mobilidade deve ser acessível. Para você poder se mover e ganhar dinheiro com segurança. De uma forma que seja sustentável para nosso planeta. E, independentemente do seu gênero, raça, religião, habilidade ou orientação sexual, defendemos seu direito de se movimentar e ganhar dinheiro livremente e sem medo. Claro, nem sempre acertamos. Mas não temos medo do fracasso, porque ele nos torna melhores, mais sábios e mais fortes. E isso nos torna ainda mais comprometidos em agir corretamente em relação aos nossos usuários, às cidades, às comunidades regionais e ao nosso grupo incrivelmente diversificado de parceiros internacionais.
                
                A ideia da Uber nasceu em uma noite de neve em Paris em 2008 e, desde então, nosso DNA de reimaginação e reinvenção se mantém. Crescemos e nos tornamos uma plataforma global que oferece a possibilidade de ganhos flexíveis e a mobilidade de pessoas e coisas de maneiras cada vez mais amplas. Começamos com as viagens de carro pelo app e depois expandimos para incluir serviços de duas rodas e até chegarmos a entregar mercadorias com caminhões articulados. De refeições a itens do dia a dia, medicamentos prescritos e praticamente tudo o que você precisa a qualquer momento para ganhar dinheiro do seu jeito. Desde a checagem de segurança de motoristas parceiros até a verificação em tempo real, a tranquilidade dos usuários é a nossa prioridade de todos os dias. Na Uber, a busca pela reimaginação nunca termina, nunca para e está sempre no início."
          />
        </div>
      </section>

      <section
        className="px-5 lg:pl-24 lg:pr-96 pt-14 pb-7 bg-ceo-bg bg-center bg-no-repeat bg-cover lg:mt-10"
        style={{
          backgroundImage:
            "url('https://www.uber-assets.com/image/upload/v1590112350/assets/ba/e2d6c0-0335-4c4c-ad45-04097c24e819/original/dara-desktop.jpg')",
        }}
      >
        <div className="flex flex-col h-[380px] gap-5 w-2/4">
          <h1 className="  text-white font-UberMoveBold text-4xl md:text-5xl  lg:text-5xl lg:leading-snug ">
            Uma carta do nosso CEO
          </h1>
          <span className="text-white text-base font-UberMoveNormal">
            Conheça o compromisso da Uber em disponibilizar a tecnologia que
            pode ajudar os usuários da nossa plataforma global a fazer a
            transição para a mobilidade sustentável.
          </span>
          <a
            target="_blank"
            className="w-auto  max-w-60  bg-black rounded-lg py-3 px-3 text-white text-center lg:mt-2"
            href="https://investor.uber.com/a-letter-from-our-ceo/?uclick_id=bf765484-6082-4c24-863d-1244774412a7"
          >
            Leia a carta de Dara
          </a>
        </div>
      </section>

      <Secondsection
        sectionClass="flex-col-reverse min-[500px] px-6 sm:flex-col lg:flex-row"
        divRightClass="flex  items-baseline w-full"
        image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1603308507/assets/f6/0c9607-ae68-43d5-9e88-79f3011d88ee/original/Sustainability.jpg"
        title="Sustentabilidade"
        imageClasse="rounded-none"
        h2Classe="text-[28px] lg:text-2x1 text-gray-800"
        content="A Uber está comprometida em se tornar uma plataforma totalmente elétrica e sem emissões de carbono até 2040. O plano é que todas as viagens sejam feitas em veículos leves (micromobilidade), sem emissão de poluentes ou por transporte público. Como a maior plataforma de mobilidade no mundo, é nossa responsabilidade enfrentar de maneira mais enfática o desafio das mudanças climáticas. Faremos isso ao oferecer aos usuários mais formas de viajar de modo sustentável, ajudar motoristas parceiros na adaptação a veículos elétricos, priorizar a transparência, além de fazer parcerias com ONGs e o setor privado para agilizar a transição para o uso de energias limpas e justas."
        contentClasse="text-[18px]"
        showButton="true"
        loginText="Saiba mais"
        link="https://www.uber.com/br/pt-br/about/sustainability/?uclick_id=bf765484-6082-4c24-863d-1244774412a7"
      />
      <Secondsection
        sectionClass=" min-[500px] lg:mt-20 px-6 sm:flex-col lg:flex-row"
        divRightClass="flex items-baseline"
        image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg"
        title="Viagens e muito mais"
        imageClasse="rounded-none"
        h2Classe="text-[28px] lg:text-2x1 text-gray-800"
        content="Além de oferecer aos usuários uma melhor mobilidade, possibilitamos a entrega de pedidos de forma ágil e econômica, expandindo o acesso à assistência médica, criando novas soluções para o transporte de cargas e permitindo que as empresas simplifiquem as viagens dos seus colaboradores. Além disso, ajudamos sempre os motoristas e entregadores parceiros a ganharem dinheiro."
        contentClasse="text-[18px]"
        showButton="true"
        pExtra="true"
        loginText="Como usar o app da Uber"
        loginText2="O que oferecemos"
      />
      <Secondsection
        sectionClass=" p-0   min-[500px] lg:flex-row-reverse "
        leftSideClass="lg=w-1/6"
        divRightClass="flex items-baseline px-6 lg:5/6"
        image="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1555433729/assets/13/b383de-93a1-4327-8812-91de86e3edd9/original/_background-01.svg"
        title="Sua tranquilidade é nossa prioridade"
        imageClasse="rounded-none lg:ml-10"
        h2Classe="lg:text-2x1 text-gray-800"
        content="A tranquilidade dos usuários e motoristas parceiros é essencial. Estamos comprometidos em fazer a nossa parte, e a tecnologia é uma peça fundamental dessa estratégia. Por meio de parcerias com organizações e especialistas em segurança, estamos desenvolvendo novas tecnologias que contribuem para um mundo mais tranquilo e com maior mobilidade para as pessoas."
        contentClasse="text-[18px]"
        showButton="true"
        loginText="Veja como funciona"
      />
      <section className="first-section-black items-center justify-between lg:block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-gray-900 text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-UberMoveBold md:mt-3">
            Informações da empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:w-full">
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1555540623/assets/cb/9b789f-167d-4a57-ac3a-c23060bfa9e8/original/170830_DaraAllHands_0I7A9940_R2.jpg"
              }
              title="Conheça nossa liderança"
              content="Estamos construindo uma cultura dentro da Uber que enfatiza fazer o que é certo, sem exceção, para usuários, motoristas parceiros e funcionários. Saiba mais sobre a equipe que está liderando essa iniciativa."
              titleBtn="Conheça nossa liderança"
              divClass="w-full"
            />
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1619719896/assets/96/8d24b6-76cd-4dcb-8b89-e3125c603538/original/test2259.jpg"
              }
              title="Compromisso com a diversidade"
              content="Nosso objetivo é criar um local de trabalho inclusivo e que represente a diversidade das cidades que atendemos. Queremos que as pessoas sejam elas mesmas e que a autenticidade de cada uma seja motivo de orgulho. Esse ambiente receptivo a pessoas das mais diversas origens transformará a Uber em uma empresa melhor, tanto para os funcionários quanto para os usuários."
              titleBtn="Saiba mais sobre diversidade"
              divClass="w-full"
            />
            <BlogComponent
              image={
                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1664822806/assets/b6/c8a24d-8e79-45a1-9e03-adead244ef0a/original/about-ec-image-01-thumb.png"
              }
              title="Agir com integridade"
              content="A Carta do Programa de Ética e Conformidade da Uber descreve nosso compromisso com a integridade nos mais altos níveis da empresa. A transparência é fundamental para uma cultura ética. Conseguimos isso por meio da nossa Linha Direta de Integridade e de várias iniciativas de conformidade eficientes e expansíveis."
              titleBtn="Veja como funciona"
              divClass="w-full"
            />
          </div>
        </div>
      </section>
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-gray-900 text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-txt-bold md:mt-3">
            Acompanhe as novidades
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 ">
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg"
              title="Newsroom"
              content="Receba anúncios sobre parcerias, atualizações de apps, iniciativas e mais informações sobre o que acontece perto de você ou em qualquer lugar do mundo."
              showBtn="true"
              textBtn="Acesse o Newsroom"
            />
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg"
              title="Blog"
              content="Descubra novos lugares, saiba mais sobre os produtos da Uber, conheça nossas parcerias e muito mais."
              showBtn="true"
              textBtn="Leia nossas publicações"
            />
            <BoxWithIcon
              icon="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg"
              title="Relações com investidores"
              content="Baixe relatórios financeiros, confira os planos para o próximo trimestre e leia sobre nossas iniciativas de responsabilidade corporativa."
              showBtn="true"
              textBtn="Veja como funciona"
            />
          </div>
        </div>
      </section>
      <section className="mt-10 flex-col bg-[#f6f6f6] w-full justify-center flex lg:py-5 lg:flex-row">
        <div className="leftside p-5 pt-5  lg:w-1/2 lg:p-20 flex flex-col space-y-5 gap-8">
          <h2 className="text-4xl text-[rgb(51, 51, 51)] text-uber font-UberMoveBold lg:text-[52px] leading-tight">
            Venha reimaginar com a gente.
          </h2>
          <div>
            <a
              href="#"
              className="bg-black p-5 text-white rounded-xl font-UberMoveNormal"
            >
              Buscar vagas
            </a>
          </div>
        </div>
        <div className="rightside lg:w-1/2 flex flex-col justify-center">
          <img
            className="w-full"
            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_372/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
            alt="globo terrestre"
          />
        </div>
      </section>
    </>
  );
}

export default FirstSectionUs;
