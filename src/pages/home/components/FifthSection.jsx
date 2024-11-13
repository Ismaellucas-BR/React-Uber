import RideIconApp from "../../../assets/svg/Rider-App-Icon_iOS.svg";
import DriveIconApp from "../../../assets/svg/Driver-App-Icon_iOS.svg";
import RideIconAppDesktop from "../../../assets/ride-app-desktop.webp";
import DriveIconAppDesktop from "../../../assets/driver-app-desktop.webp";
function FifthSection() {
  return (
    <section className="bg-slate-100 mt-10 px-5 pt-3 pb-10">
      <div className="content-icons lg:max-w-7xl lg:mx-auto lg:px-6">
        <h3 className="font-uber text-3xl my-10">É mais fácil pelo app</h3>

        <div className="icon-box mob-tablet lg:hidden">
          <div className="ride-box flex justify-start items-center bg-white p-5 border-2 border-slate-200 w-full">
            <div className="flex justify-between items-center w-full">
              <div className="imgPlusText flex items-center">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
                  layout="intrinsic"
                  width={200}
                  height={200}
                  alt="Icone da uber com fundo preto e bordar levemente arredondadas"
                />

                <span className="ml-4 font-uber donwload-app text-2xl">
                  Baixe o app da Uber
                </span>
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ride-box flex justify-start items-center bg-white p-5 border-2 border-slate-200 w-full mt-10">
            <div className="flex justify-between items-center w-full">
              <div className="imgPlusText flex items-center">
                <img
                  className=""
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1690813624/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png"
                  alt="Icone da uber com seta embaixo e  com fundo preto e bordar levemente arredondadas"
                  width={200}
                  height={200}
                />
                <span className="ml-4 font-uber donwload-app text-2xl">
                  Baixe o app de parceiro
                </span>
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="icon-box desktop hidden lg:grid grid-cols-2 gap-10  ">
          <div className="ride-box flex justify-start items-center bg-white p-5 border-2 border-slate-200 w-full lg:py-6 lg:px-6">
            <div className="flex justify-between items-center w-full">
              <div className="imgPlusText flex items-center">
                <div className="w-40 h-40">
                  <img
                    className=""
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
                    width={150}
                    height={150}
                    alt="Icone da uber com fundo preto e bordar levemente arredondadas"
                  />
                </div>
                <div className="text-content ml-4">
                  <span className=" font-uber donwload-app text-2xl">
                    Baixe o app da Uber
                  </span>
                  <p>Leia o código QR para baixar o app</p>
                </div>
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ride-box flex justify-start items-center bg-white p-5 border-2 border-slate-200 w-full mt-10 lg:mt-0 lg:py-6 lg:px-6">
            <div className="flex justify-between items-center w-full">
              <div className="imgPlusText flex items-center ">
                <div className="w-40 h-40">
                  <img
                    className=""
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1690813624/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png"
                    width={150}
                    height={150}
                    alt="Icone da uber com seta embaixo e  com fundo preto e bordar levemente arredondadas"
                  />
                </div>
                <div className="text-content ml-4">
                  <span className=" font-uber donwload-app text-2xl">
                    Baixe o app de parceiro
                  </span>
                  <p>Leia o código QR para baixar o app</p>
                </div>
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
