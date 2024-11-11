import BgYellow from "../../../assets/bgyellow.webp";
function SecondSectiondg() {
  return (
    <div className="w-full  border-t border-white sm:h-screen">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-10 px-5  sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 sm:pb-10   lg:w-1/2">
          <img
            className="rounded-md "
            src={BgYellow}
            layout="intrinsic"
            width={550}
            height={550}
            alt="Mulher saindo do carro"
          />
        </div>
        <div className="right-side mt-5  justify-end pb-10 sm:mt-0 sm:w-1/2  lg:flex lg:flex-col lg:justify-start lg:pl-32">
          <h2 className="text-gray-900 text-3xl cta-text sm:mt-10 sm:text-4xl sm:leading-tight font-UberMoveBold">
            Uma alternativa aos empregos de motoristas tradicionais
          </h2>
          <p className="text-black mt-4 text-base font-UberMoveNormal ">
            Dirigir com o app da Uber oferece uma oportunidade flexível de
            ganhos. É uma ótima alternativa aos trabalhos de motorista em tempo
            integral ou meio período, ou a um bico temporário ou sazonal. Ou
            talvez você já seja um motorista de aplicativos e queira aumentar
            sua renda ao se tornar um motorista parceiro da Uber.
            <br></br>
            <br></br>
            Os motoristas que usam o app da Uber vêm de todas as áreas e
            setores, e definem o próprio horário para que o trabalho se encaixe
            em suas vidas, e não o contrário.
            <br></br>
            <br></br>A Uber oferece uma alternativa aos tradicionais trabalhos
            de motorista de meio período em quase todas as cidades brasileiras.
            Estamos presentes nas principais capitais, bem como nas cidades
            menores em todo o país.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SecondSectiondg;
