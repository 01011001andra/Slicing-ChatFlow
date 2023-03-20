import React from "react";

const Hero = () => {
  return (
    <div
      className={`w-full h-full bg-blue-800 bg-[url('./HeroBackground.png')] bg-no-repeat bg-cover flex py-28 text-white`}
    >
      <div className="w-full h-full md:max-w-4xl px-4 md:px-0 xl:max-w-6xl mx-auto md:flex items-center justify-between">
        <div className="flex flex-col gap-[30px] w-full ">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-white text-4xl sm:text-[58px] font-SourceSerifPro sm:leading-[70px] overflow-y-hidden">
              Improve your customer experience with real- time assistance
            </h1>
            <p className="sm:text-[18px] sm:leading-8 text-white">
              Our live chat software helps you connect with your customers
              instantly, boosting sales and improving customer satisfaction. Try
              it out today and see the difference it can make for your business.
            </p>
            <img src="./Chat.png" alt="Chat" className="w-3/5 sm:hidden" />
          </div>
          <div className="flex gap-[15px]">
            <button className="px-7 sm:px-[35px] py-[15px] bg-[#0D082C] rounded-full text-white">
              Get Started
            </button>
            <button className="font-bold px-[25px] py-[15px] rounded-full text-white bg-white flex items-center gap-4 bg-opacity-5">
              <img src="./Play.svg" alt="play" /> See in Action
            </button>
          </div>
        </div>
        <img src="./Chat.png" alt="Chat" className="w-3/5 hidden sm:flex" />
      </div>
    </div>
  );
};

export default Hero;
