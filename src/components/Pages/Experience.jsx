import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-full bg-[#f7b578] py-[50px]">
      <div className="w-full h-full md:max-w-4xl xl:max-w-6xl mx-auto flex gap-[65px] justify-center items-center py-[50px]">
        <div className="md:w-1/2 max-w-lg flex flex-col gap-10 px-6 xl:px-0">
          <div className=" flex flex-col gap-[10px]">
            <h1 className="font-bold font-Merriweather text-[38px] text-black leading-[54px]">
              Experience the Power of Our Live Chat
            </h1>
            <p className="text-black leading-[26px]">
              See for yourself how our live chat can help you connect with your
              customers and improve their experience on your website. Check out
              a screenshot of our live chat in action.
            </p>
          </div>
          <div>
            <button className="px-[35px] py-[15px] rounded-full bg-black text-[18px] text-white">
              Book a Demo
            </button>
          </div>
          <div className="w-full h-full flex gap-[30px]">
            <div className="w-full h-full flex flex-col">
              <h1 className="font-semibold text-black leading-[30px]">
                Improving Customer Support
              </h1>
              <p className="text-[14px] leading-[24px] text-[#0D082C]">
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>
            <div className="w-full h-full flex flex-col">
              <h1 className="font-semibold text-black leading-[30px]">
                Improving Customer Support
              </h1>
              <p className="text-[14px] leading-[24px] text-[#0D082C]">
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:flex justify-end hidden">
          <img src="./ChatFlow.png" alt="chatflow" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
