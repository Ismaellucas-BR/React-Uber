import React, { useState } from "react";

function Accondion({ title, content }) {
  const [accondionOpen, setAccondionOpen] = useState(false);
  return (
    <div className="pt-6 pb-2 w-full border-b  border-gray-400">
      <button
        onClick={() => setAccondionOpen(!accondionOpen)}
        className=" flex justify-between items-start text-left w-full font-UberMoveBold text-base pb-4"
      >
        {title}
        {/*accondionOpen ? <span>+</span> : <span>-</span>*/}
        <svg
          className="fill-black shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accondionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accondionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accondionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pb-1">
          <span className="font-UberMove font-normal text-base text-black">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accondion;
