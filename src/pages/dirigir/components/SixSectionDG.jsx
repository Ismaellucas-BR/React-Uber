import Gps from "../../../assets/GPS-Tracking.jpg";
import Support24 from "../../../assets/24_7-Support.jpg";
import Familly from "../../../assets/family.jpg";
function SixSectionDG() {
  return (
    <div className="w-full h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-5 px-5 bg-white sm:pt-10 sm:flex sm:pb-10 md:flex-col">
        <div className="left-side w-full   flex-col sm:ml-4 lg:h-auto  lg:w-full">
          <h2 className="text-black text-3xl cta-text lg:mt-10 sm:text-3xl sm:leading-tight font-UberMove font-bold">
            Segurança ao volante
          </h2>
          <p className="text-black mt-4 text-lg font-UberMove font-medium lg:pr-[500px]">
            Buscamos incessantemente melhorar nossos padrões de qualidade, pois
            a sua segurança é nossa prioridade.
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <p className="text-black text-base font-UberMove font-normal my-4 border-b pb-1 ">
              Veja como funciona
            </p>
          </div>
        </div>
        <div className="lg:flex lg:mt-5">
          <div className="loginRedirect flex flex-col mt-4 pr-14 md:mt-10 md:w-full lg:mt-0">
            <div className="w-12">
              <img
                src={Gps}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMove  text-lg mt-4 mb-2 font-bold">
              Proteção 24 horas por dia
            </h4>
            <p className="text-base font-UberMove font-normal">
              Bloqueamos viagens inseguras com a nossa tecnologia de
              inteligência artificial.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-UberMove border-b pb-1 text-base font-normal">
                Confira as informações
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
            <div className="w-12">
              <img
                src={Support24}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMove font-bold mt-4 text-lg mb-2">
              Ajuda quando você precisar
            </h4>
            <p className="text-base font-UberMove font-normal">
              O botão de emergência chama o 911. O app mostra a sua localização
              e as informações da viagem para você poder compartilhá-los com
              rapidez em casos de emergência.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-txt-light border-b pb-1 text-base font-normal">
                Veja como funciona
              </p>
            </div>
          </div>
          <div className="loginRedirect flex flex-col mt-4 pr-14 lg:mt-0">
            <div className="w-12">
              <img
                src={Familly}
                alt="Mulher saindo do carro"
                width={20}
                height={20}
              />
            </div>
            <h4 className="font-UberMove font-bold mt-4 text-lg mb-2">
              Código da Comunidade Uber
            </h4>
            <p className="text-base font-UberMove font-normal">
              Nossos padrões ajudam a criar conexões seguras e interações
              positivas com todos. Veja como nosso código se aplica a você.
            </p>
            <div className=" inline-flex mt-6 mb-4">
              <p className="text-black font-UberMove border-b pb-1 text-base font-normal">
                Veja como funciona
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SixSectionDG;
