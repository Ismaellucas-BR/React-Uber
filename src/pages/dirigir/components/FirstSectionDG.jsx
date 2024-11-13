import Illustration from "../../../assets/illustration-safety-01-1.webp";
function FirstSectiondg() {
  return (
    <div className="w-full bg-black border-t border-white sm:h-auto">
      <section className="first-section-black items-center justify-between block w-full max-w-7xl mx-auto py-10 px-5 bg-black  sm:pt-10 sm:flex sm:pb-10">
        <div className="left-side w-full   flex-col sm:ml-4 sm:pb-10   lg:w-2/5">
          <h2 className="text-white text-4xl cta-text sm:mt-10 sm:text-5xl sm:leading-tight font-txt-bold">
            Dirija quando quiser e ganhe de acordo com suas necessidades
          </h2>
          <p className="text-white mt-4 text-base font-UberMoveNormal">
            Gere ganhos no horário que quiser.
          </p>
        </div>
        <div className="right-side mt-5  hidden justify-end pb-10 sm:mt-0 sm:w-3/5  lg:flex lg:justify-start lg:pl-32">
          <img
            className="rounded-md "
            src={Illustration}
            width={500}
            height={500}
            alt="Mulher saindo do carro"
          />
        </div>
      </section>
    </div>
  );
}

export default FirstSectiondg;
