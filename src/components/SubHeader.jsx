import DropdownIcon from "../../DropdownIcon/DropdownIcon";
import userPhoto from "../../../assets/Ismael Lucas.jpeg";
import React from "react";

function SubHeader() {
  return (
    <section className="w-full bg-white h-14 text-black flex items-center mx-auto sm:w-">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-5">
        <div className="item flex justify-between items-center">
          <p className="logo text-2xl">Dirigir</p>
          <nav className="nav-menu lg:flex">
            <a
              href="https://auth.uber.com/v2/?breeze_local_zone=dca18&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3F_ga%3D2.92480990.212723703.1710255950-1865010512.1709575446%26_gl%3D1%252Aqzrq3m%252A_ga%252AMTg2NTAxMDUxMi4xNzA5NTc1NDQ2%252A_ga_XTGQLY6KPT%252AMTcxMDI1NTk0OS44LjAuMTcxMDI1NjU5NC4wLjAuMA..%26marketing_vistor_id%3D13e8c7ec-0f3f-4bf4-85e6-ee7c3b2695bb%26previousPath%3D%252Flooking%26uclick_id%3Db2dff46b-842d-4676-8273-1c57020ccf03&state=FL_DeMfj03M3MuqNOMltPBNxynr-Ygx3gITjv4JpWxs%3D"
              className="flex items-center ml-2"
            >
              Empresa
            </a>
            <a href="#" className="ml-2">
              Segurança
            </a>
            <a href="#" className="ml-2">
              Ajuda
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="product flex items-center mr-4 lg:flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                fill="white"
              ></path>
            </svg>
            <p className="ml-2">Produtos</p>
          </div>
          <div className="flex justify-between items-center bg-white rounded-full p-1 mr-4  user">
            <img
              className="w-6 rounded-full flex justify-between"
              src={userPhoto}
              alt="Foto de usuario"
            />
            <p className="text-black ml-2 name-user">Ismael</p>
            <DropdownIcon color="black" />
          </div>

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            color="white"
          >
            <path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,
            <path d="M2 15h20v3H2v-3Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default SubHeader;
