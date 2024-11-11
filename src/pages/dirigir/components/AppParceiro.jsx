function Appparceiro() {
  return (
    <section className="bg-phone bg-cover bg-center h-[500px] hidden md:block">
      <div className="left-side    flex-col justify-center flex  h-full  ml-10 pr-20  flex-grow w-2/4 lg:ml-20 lg:pr-52">
        <h2 className="text-black text-3xl cta-text sm:mt-36 sm:text-5xl sm:leading-tight font-UberMoveBold md:mt-0">
          O app de parceiro
        </h2>
        <p className=" font-UberMoveNormal text-black mt-4 text-base ">
          Confiável e fácil de usar, o app foi desenvolvido para os motoristas
          parceiros. Ele mostra tudo o que você precisa saber para se tornar um
          motorista parceiro da Uber.
        </p>
        <div className="loginRedirect flex items-center mt-4">
          <p className="link-underline font-UberMoveNormal text-black text-lg my-4 border-b pb-1 ">
            Veja como funciona
          </p>
        </div>
      </div>
    </section>
  );
}

export default Appparceiro;
