import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function FifthSection() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-slate-100 mt-10 px-5 pt-3 pb-10">
      <div className="content-icons lg:max-w-7xl lg:mx-auto lg:px-6">
        <h3 className="font-uber text-3xl my-10">
          {t("Title-section-QRCode")}
        </h3>

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
                  {t("Title-QRCode")}
                </span>
              </div>
              <Link
                target="_blank"
                to="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Da8175957-e855-4c52-a6f1-ff64f60d65de"
              >
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
              </Link>
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
                  {t("Title-QRCode2")}
                </span>
              </div>
              <Link
                target="_blank"
                to="https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D41bde22f-9b1c-41ec-900c-cfee737e82d2"
              >
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
              </Link>
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
                <div className=" flex flex-col text-content ml-4">
                  <span className=" font-uber donwload-app text-2xl">
                    {t("Title-QRCode")}
                  </span>
                  {t("SubTitle-QRCode")}
                </div>
              </div>
              <Link
                target="_blank"
                to="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Da8175957-e855-4c52-a6f1-ff64f60d65de"
              >
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
              </Link>
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
                <div className="flex flex-col text-content ml-4">
                  <span className=" font-uber donwload-app text-2xl">
                    {t("Title-QRCode2")}
                  </span>
                  {t("SubTitle-QRCode2")}
                </div>
              </div>
              <Link
                target="_blank"
                to="https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D41bde22f-9b1c-41ec-900c-cfee737e82d2"
              >
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
