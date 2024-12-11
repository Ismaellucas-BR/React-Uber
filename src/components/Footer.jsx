import FooterMenu from "./footerMenu";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const initialLang = location.pathname.split("/")[1] || "pt";
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const generateLocalizedLink = (path) => {
    // Se o link for absoluto (começa com http), retorna sem alterações
    if (path.startsWith("http")) return path;

    // Adiciona o idioma ao início do path relativo
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <section className="bg-black px-6 py-14 lg:p-16">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto lg:gap-20">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex flex-col gap-8 w-full pt-5 lg:w-1/2">
            <span className="font-txt-regular text-white text-2xl">Uber</span>
            <span className="font-txt-regular text-white text-base">
              {t("footer.Visit-Help-Center")}
            </span>
          </div>
          <div className=" mt-8 w-full font-txt-regular md:pr-80 lg:w-1/2 lg:pl-60 lg:mt-0 lg:pr-0">
            <span className="text-white text-sm hover:text-gray-300">
              Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda | Avenida
              Brigadeiro Faria Lima, n.º 949, Pinheiros, São Paulo/SP - CEP
              05.426-200 | CNPJ: 17.895.646/0001-87
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto lg:flex-row lg:gap-0">
          <FooterMenu
            title={t("footer.company.title")}
            linkUm={generateLocalizedLink("/quem_somos")}
            itemUm={t("footer.company.items.aboutUs")}
            linkDois=""
            itemDois={t("footer.company.items.whatWeOffer")}
            linkTres=""
            itemTres={t("footer.company.items.newsroom")}
            linkQuatro=""
            itemQuatro={t("footer.company.items.investors")}
            linkCinco=""
            itemCinco="Blog"
            linkSeis=""
            itemSeis={t("footer.company.items.careers")}
          />
          <FooterMenu
            title={t("footer.products.title")}
            linkUm=""
            itemUm={t("footer.products.items.travel")}
            linkDois="/dirigir"
            itemDois={t("footer.products.items.drive")}
            linkTres=""
            itemTres={t("footer.products.items.deliver")}
            linkQuatro=""
            itemQuatro={t("footer.products.items.order")}
            linkCinco=""
            itemCinco={t("footer.products.items.business")}
            linkSeis=""
            itemSeis={t("footer.products.items.freight")}
            showlink7="true"
            showlink8="true"
          />
          <FooterMenu
            title={t("footer.globalCitizenship.title")}
            linkUm=""
            itemUm={t("footer.globalCitizenship.items.safety")}
            linkDois=""
            itemDois={t("footer.globalCitizenship.items.diversity")}
            linkTres=""
            itemTres={t("footer.globalCitizenship.items.sustainability")}
            showlink4="true"
            showlink5="true"
            showlink6="true"
            showlink7="true"
            showlink8="true"
          />
          <FooterMenu
            title={t("footer.travel.title")}
            linkUm=""
            itemUm={t("footer.travel.items.book")}
            linkDois=""
            itemDois={t("footer.travel.items.airports")}
            linkTres=""
            itemTres={t("footer.travel.items.cities")}
            showlink4="true"
            showlink5="true"
            showlink6="true"
            showlink7="true"
            showlink8="true"
          />
        </div>
        <div>
          <div className="flex gap-6 w-1/2 lg:gap-20">
            <a
              target="_blank"
              className="p-4 hover:bg-gray-600 hover:rounded-md"
              href="https://www.facebook.com/uberbr/?brand_redir=120945717945722&uclick_id=e960c8d0-b70d-419b-ab6f-2355b16b9bff"
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="white">
                <title>facebook</title>
                <path
                  d="M21.79 1H2.21C1.54 1 1 1.54 1 2.21v19.57c0 .68.54 1.22 1.21 1.22h10.54v-8.51H9.9v-3.33h2.86V8.71c0-2.84 1.74-4.39 4.27-4.39.85 0 1.71.04 2.56.13v2.97h-1.75c-1.38 0-1.65.65-1.65 1.62v2.12h3.3l-.43 3.33h-2.89V23h5.61c.67 0 1.21-.54 1.21-1.21V2.21C23 1.54 22.46 1 21.79 1Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="p-4 hover:bg-gray-600 hover:rounded-md"
              href="https://x.com/uber?uclick_id=e960c8d0-b70d-419b-ab6f-2355b16b9bff"
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="white">
                <title>twitter</title>
                <path
                  d="M14.094 10.317 22.28 1H20.34l-7.11 8.088L7.557 1H1.01l8.583 12.231L1.01 23H2.95l7.503-8.543L16.446 23h6.546M3.649 2.432h2.978L20.34 21.639h-2.98"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="p-4 hover:bg-gray-600 hover:rounded-md"
              href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA?uclick_id=e960c8d0-b70d-419b-ab6f-2355b16b9bff"
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="white">
                <title>youtube</title>
                <path
                  d="M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s.04 3.85.5 5.58c.25.95 1 1.7 1.95 1.96 1.71.46 8.59.46 8.59.46s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96.46-1.73.42-5.58.42-5.58Zm-13 3.27V8.73L15.5 12 10 15.27Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="p-4 hover:bg-gray-600 hover:rounded-md"
              href="https://www.linkedin.com/company/1815218?uclick_id=e960c8d0-b70d-419b-ab6f-2355b16b9bff"
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="white">
                <title>linkedin</title>
                <path
                  d="M21.37 1H2.62C1.73 1 1 1.71 1 2.58v18.83c0 .88.73 1.59 1.62 1.59h18.75c.9 0 1.63-.71 1.63-1.59V2.58C23 1.71 22.27 1 21.37 1ZM7.53 19.75H4.26V9.25h3.27v10.5ZM5.89 7.81C4.85 7.81 4 6.96 4 5.92s.84-1.89 1.89-1.89c1.04 0 1.89.85 1.89 1.89.01 1.04-.84 1.89-1.89 1.89Zm13.86 11.94h-3.26v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7v5.19H9.57V9.26h3.13v1.43h.04c.44-.83 1.5-1.7 3.09-1.7 3.3 0 3.91 2.17 3.91 5v5.76h.01Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="p-4 hover:bg-gray-600 hover:rounded-md"
              href="https://www.instagram.com/uber/?uclick_id=e960c8d0-b70d-419b-ab6f-2355b16b9bff"
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="white">
                <title>instagram</title>
                <g fill="white">
                  <path d="M21.15 2.85C19.05.74 16.23 1 12 1 8.04 1 5 .69 2.85 2.85.74 4.95 1 7.77 1 12c0 3.95-.31 7 1.85 9.15C4.95 23.26 7.77 23 12 23c3.96 0 7 .31 9.15-1.85C23.25 19.05 23 16.23 23 12c0-4.31.24-7.07-1.85-9.15Zm-1.4 16.9c-1.37 1.37-3.18 1.27-7.75 1.27-4.29 0-6.34.15-7.75-1.27-1.44-1.44-1.27-3.51-1.27-7.75 0-4.23-.15-6.33 1.27-7.75C5.66 2.84 7.6 2.98 12 2.98c4.23 0 6.33-.15 7.75 1.27 1.38 1.38 1.27 3.22 1.27 7.75 0 4.24.15 6.34-1.27 7.75Z"></path>
                  <path d="M12 6.35a5.65 5.65 0 1 0 .001 11.301A5.65 5.65 0 0 0 12 6.35Zm0 9.32c-2.02 0-3.67-1.64-3.67-3.67 0-2.03 1.64-3.67 3.67-3.67 2.03 0 3.67 1.64 3.67 3.67 0 2.02-1.65 3.67-3.67 3.67ZM17.87 4.81c-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32Z"></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex gap-5 w-full lg:w-1/2">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.ubercab&referrer=singular_click_id%3D6caec709-ef02-4117-bbb4-9ac7211d339c"
            >
              <img
                className="w-[128px]"
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                alt="baixe no google play"
              />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.ubercab&referrer=singular_click_id%3Dc6010f06-b286-4ed2-8b22-4ea3e7d9500e"
            >
              <img
                className="w-[128px]"
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                alt="baixe no apple store"
              />
            </a>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto lg:flex-row lg:gap-0">
          <div className="flex gap-5 w-full font-txt-regular text-xs lg:w-1/2">
            <a
              href="https://developerismaellucas.com"
              target="_blank"
              className="text-white"
            >
              Developer Ismael Lucas
            </a>
            <span className="text-white">© 2024 Uber Technologies Inc.</span>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="flex gap-10 justify-start font-txt-regular text-xs lg:justify-end lg:gap-5">
              <li className="text-white hover:text-gray-600">
                <a
                  target="_blank"
                  href="https://www.uber.com/legal/document/?name=privacy-notice&uclick_id=2109ddad-1246-4e61-a3a5-2816b763c9e3"
                >
                  Privacidade
                </a>
              </li>
              <li className="text-white hover:text-gray-600">
                <a
                  target="_blank"
                  href="https://www.uber.com/br/pt-br/about/accessibility/?uclick_id=2109ddad-1246-4e61-a3a5-2816b763c9e3"
                >
                  Acessibilidade
                </a>
              </li>
              <li className="text-white hover:text-gray-600">
                <a
                  target="_blank"
                  href="https://www.uber.com/legal/document/?name=general-terms-of-use&uclick_id=2109ddad-1246-4e61-a3a5-2816b763c9e3"
                >
                  Termos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
