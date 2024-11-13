import U4B from "../../../assets/u4b-square.webp";
function ThirdSection() {
  return (
    <div className="w-full bg-white">
      <section className="first-section-black flex flex-col items-center justify-between w-full max-w-7xl mx-auto pt-10 md:pt-5 px-5 bg-white sm:pt-20 lg:flex-row sm:pb-10 gap-10">
        <div className="left-side w-full flex flex-col lg:ml-4 lg:h-screen lg:w-2/5  gap-5 justify-center">
          <h2 className="text-slate-800 text-4xl cta-text  sm:text-[3.25rem] sm:leading-tight	">
            A plataforma Uber que você conhece, reinventada para empresas
          </h2>
          <p className="text-slate-800 font-UberMove font-normal">
            A Uber para Empresas é uma plataforma global de gestão de viagens,
            refeições e entregas locais para empresas de todos os portes
          </p>
          <div className="loginRedirect flex items-center mt-4">
            <a className="btn-start mr-4" href="/getting-started">
              Começar
            </a>
            <a
              className="link-underline text-black mt-4 border-b pb-1"
              href="https://www.uber.com/br/pt-br/business/?uclick_id=bf765484-6082-4c24-863d-1244774412a7"
            >
              Confira nossas soluções
            </a>
          </div>
        </div>
        <div className="right-side mt-5 md:mt-10  flex justify-end items-center pb-10  lg:mt-0 lg:w-3/5">
          <img
            className="rounded-md w-full lg:w-4/5"
            src={U4B}
            layout="resposive"
            width={800}
            height={800}
            alt="Mulher saindo do carro"
          />
        </div>
      </section>
    </div>
  );
}

export default ThirdSection;
