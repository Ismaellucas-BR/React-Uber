function SecondSc() {
  return (
    <section className="bg-white flex flex-col-reverse items-center justify-between w-full max-w-7xl mx-auto pt-10 px-5  sm:pt-20 lg:flex lg:flex-row sm:pb-10">
      <div className="w-full left-side mt-5 pt-4  flex justify-end sm:mt-0   sm:pt-10 sm:justify-between lg:w-3/5">
        <img
          className="rounded-md w-full"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_800,h_800/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
          alt="Homem dentro do carro"
          layout="responsive"
          width={800}
          height={800}
        />
      </div>
      <div className="right-side w-full   lg:mt-10  flex-col sm:min-[500px]    lg:justify-center lg:w-2/3 lg:p-20">
        <h2 className="text-[36px] leading-9 md:text-5xl cta-text   sm:leading-tight ">
          Dirija quando quiser e ganhe de acordo com suas necessidades
        </h2>
        <p className="text-black mt-4 sm:mt-6 font-UberMove font-normal">
          Ganhe dinheiro com entregas e viagens no horário que você definir.
          Você pode usar seu próprio carro ou escolher um carro alugado por meio
          do app da Uber.
        </p>

        <div className="loginRedirect flex items-center mt-4 gap-5">
          <a target="_blank" className="btn-start mr-4" href="/dirigir">
            Começar
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondSc;
