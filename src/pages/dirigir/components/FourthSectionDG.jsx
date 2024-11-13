import BlogComponent from "../../../components/BlogComponent";
function FourthSectiondg() {
  return (
    <div className="w-full  mt-10 h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto pt-5 px-5 mt-5 bg-white sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto lg:w-full">
          <h2 className="text-black text-3xl mb-10 cta-text sm:mt-36 sm:text-4xl sm:leading-tight font-UberMoveBold md:mt-3">
            Receba para dirigir
          </h2>
          <div className="md:flex md:gap-10 lg:w-full">
            <BlogComponent
              image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1581113810/assets/92/557e45-e7d5-44eb-90e1-35871c82f0ad/original/UberIM_004994-medium.jpg"
              title="Ganhe dinheiro a qualquer hora, em qualquer lugar"
              content="Quer você dirija apenas algumas horas de vez em quando ou use o
                app de parceiro com frequência, com o app da Uber é você que
                organiza as suas prioridades e agenda o seu tempo. Dirija em
                qualquer horário ou dia da semana. Os recursos do app de
                parceiro ajudarão você a encontrar usuários em tempo real, para
                que possa receber alertas sobre oportunidades de ganhos nas
                proximidades."
              titleBtn="Veja como funciona"
              divClass="md:w-1/2"
            />
            <BlogComponent
              image="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_314/v1555099943/assets/d3/addd33-a2e2-406c-8040-6bac00bb7b8b/original/United-States-Vehicle-Solutions-Driver-With-Car4b.jpg"
              title="Precisa de um carro?"
              content="Não tem carro? Sem problemas. Se você quer se tornar um
                motorista parceiro pelo app da Uber, mas precisa de um veículo,
                confira a seleção dos nossos parceiros de veículos. Você pode
                encontrar um veículo para alugar por semana ou por mais tempo.
                Normalmente, esses veículos vêm com seguro, quilometragem
                ilimitada, manutenção básica e muito mais¹. As opções e os
                preços mais baixos disponíveis variam de acordo com a cidade e a
                locadora."
              titleBtn="Consiga um carro"
              divClass="md:w-1/2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSectiondg;
