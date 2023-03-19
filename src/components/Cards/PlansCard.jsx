import React from "react";

const PlansCard = ({ cardOption, cardPrice, cardFeature, cardBackground }) => {
  return (
    <div className="w-[360px] h-[396px] flex flex-col rounded-[10px] mt-10 sm:mt-0">
      <div
        className={`w-full h-12 ${cardBackground} flex items-center justify-center`}
      >
        <span className="font-bold text-sm text-white">{cardOption}</span>
      </div>
      <div className="flex flex-col gap-[27px] p-[30px] border">
        <span className="font-bold text-[32px] text-center">{cardPrice}</span>
        <div className="flex flex-col gap-[15px]">
          {cardFeature.map((item) => {
            return (
              <span className="flex gap-[10px] overflow-y-hidden">
                <img src="./Centang.svg" alt="true" />
                {item}
              </span>
            );
          })}
        </div>
        <button className={`p-[10px] ${cardBackground} rounded-md text-white`}>
          Choose
        </button>
      </div>
    </div>
  );
};

export default PlansCard;
