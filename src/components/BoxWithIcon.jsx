import React from "react";

function BoxWithIcon(props) {
  return (
    <div className="w-full flex flex-col gap-2 lg:w-1/3">
      <img className="w-6 lg:w-5" src={props.icon} alt="icone de carro" />
      <h4 className="text-h4-bold text-xl">{props.title}</h4>
      <p className="text-lg">{props.content}</p>
      <div>
        {props.showBtn && (
          <p className="text-black mt-4 border-b pb-1 inline-block border-gray-500">
            {props.textBtn}
          </p>
        )}
      </div>
    </div>
  );
}

export default BoxWithIcon;
