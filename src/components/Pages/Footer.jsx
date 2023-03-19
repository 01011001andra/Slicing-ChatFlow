import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full md:max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center px-6 xl:px-0">
      <div className="w-full flex py-[50px] flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-xl md:text-2xl font-bold font-Merriweather leading-8 md:leading-[54px]">
            Sign Up and Start Chatting Today
          </h1>
          <p className="leading-[26px] w-full max-w-3xl">
            Don't wait any longer to start improving the user experience on your
            website. Sign up for our live chat product and start connecting with
            your customers in real-time.
          </p>
        </div>
        <button className="px-20 py-3 md:px-[35px] md:py-[15px] bg-black text-white text-lg leading-[30px] rounded-full">
          Sign Up Now
        </button>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center">
        <div className="w-[265px] h-full flex flex-col gap-5 border-y py-6 sm:py-[50px] items-center sm:items-start">
          <h2 className="text-[#0D082C] text-sm font-bold tracking-widest">
            PRODUCTS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
          </ul>
        </div>
        <div className="w-[265px] h-full flex flex-col gap-5 border-y py-6 sm:py-[50px] items-center sm:items-start">
          <h2 className="text-[#0D082C] text-sm font-bold tracking-widest">
            PRODUCTS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
          </ul>
        </div>
        <div className="w-[265px] h-full flex flex-col gap-5 border-y py-6 sm:py-[50px] items-center sm:items-start">
          <h2 className="text-[#0D082C] text-sm font-bold tracking-widest">
            PRODUCTS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
          </ul>
        </div>
        <div className="w-[265px] h-full flex flex-col gap-5 border-y py-6 sm:py-[50px] items-center sm:items-start">
          <h2 className="text-[#0D082C] text-sm font-bold tracking-widest">
            PRODUCTS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
            <li className="leading-7">Download App</li>
          </ul>
        </div>
      </div>
      <h1 className="font-bold text-xs tracking-widest text-[#0D082C] opacity-40 pt-5 pb-[50px]">
        BUILD WITH ❤️ BY YANDRA <span className="text-[#4635f3]">MUSLIM</span>
      </h1>
    </div>
  );
};

export default Footer;
