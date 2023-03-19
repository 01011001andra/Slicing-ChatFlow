import React from "react";

const Card = ({ icon, title, text }) => {
  return (
    <div className="w-[360px] flex flex-col gap-[15px] items-center justify-center sm:items-start sm:justify-start">
      <div className="w-[50px] h-[50px] bg-[#4635f3] rounded-md flex items-center justify-center">
        <img src={icon} alt="icon" />
      </div>
      <h1 className="text-xl text-black font-bold">{title}</h1>
      <p className="leading-[26px] text-black">{text}</p>
    </div>
  );
};

export default Card;
