function StandardModule(props) {
  return (
    <section
      className={`flex flex-col-reverse items-center justify-between min-[500px] w-full max-w-7xl mx-auto  ${props.sectionClass}`}
    >
      <div
        className={` w-full left-side mt-5 pt-4  flex justify-end sm:mt-0   sm:pt-10 sm:justify-between ${props.leftSideClass}`}
      >
        <img
          className={`rounded-md w-full lg:w-4/5 ${props.imageClasse}`}
          src={props.image}
          alt="Homem dentro do carro"
        />
      </div>
      <div
        className={`right-side w-full   mt-10  flex-col sm:min-[500px]   lg:justify-center  ${props.divRightClass}`}
      >
        <h2
          className={` pr-6 text-4xl cta-text font-UberMoveBold sm:leading-tight ${props.h2Classe}`}
        >
          {props.title}{" "}
        </h2>
        <p
          className={`text-black font-UberMoveNormal mt-4 sm:mt-6 ${props.contentClasse}`}
        >
          {props.content}
        </p>
        {props.showButton && (
          <div className="loginRedirect flex items-center mt-4 gap-5">
            {props.btn && (
              <a
                target="_blank"
                href={props.link}
                className="btn-start mr-4 font-UberMoveNormal"
              >
                {props.buttonText}
              </a>
            )}
            <p className="text-black mt-4 border-b pb-1 font-UberMoveNormal">
              {props.loginText}
            </p>
            {props.pExtra && (
              <p className="text-black mt-4 border-b pb-1 font-UberMoveNormal">
                {props.loginText2}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default StandardModule;
