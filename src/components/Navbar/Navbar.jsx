import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/Io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navMenu = ["Home", "Pricing", "Support", "Contact Us"];
  const [bgNav, setBgNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });
  return (
    <>
      <div
        className={`w-full h-32 flex items-center fixed top-0 left-0 ${
          bgNav ? "bg-black/40" : "bg-none"
        }`}
      >
        <nav className="w-full hidden md:max-w-4xl xl:max-w-6xl mx-auto sm:flex justify-between items-center px-6 xl:px-0">
          <div className="flex gap-[85px]">
            <span className="font-Merriweather text-[18px] select-none text-white">
              ChatFlow
            </span>
            <ul className="flex gap-[50px] ">
              {navMenu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer font-thin hover:font-bold text-white"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-[15px]">
            <button className="px-5 py-2 rounded-md text-white">Login</button>
            <button className="font-bold px-5 py-2 rounded-md bg-white bg-opacity-40 text-black">
              Register
            </button>
          </div>
        </nav>
        <nav className="w-full h-full sm:hidden">
          <div className="w-full h-full max-w-xl flex items-center justify-between px-6">
            <span className="font-Merriweather text-[24px] select-none text-white">
              ChatFlow
            </span>
            <div
              className="cursor-pointer"
              onClick={() => {
                return setOpen(!open);
              }}
            >
              {!open && <GiHamburgerMenu size={30} />}
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`w-3/4 h-screen sm:hidden ${
          open ? "flex flex-col" : "hidden"
        } bg-white top-0 left-0 fixed py-8`}
      >
        <div className="w-full flex flex-col max-w-sm mx-auto px-3 gap-10">
          <div className="w-full flex justify-between">
            <span className="font-Merriweather text-[24px] select-none">
              ChatFlow
            </span>
            <div
              className="cursor-pointer"
              onClick={() => {
                return setOpen(!open);
              }}
            >
              <IoMdClose size={35} />
            </div>
          </div>
          <ul className="flex flex-col">
            {navMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer font-thin text-xl hover:font-bold border-y py-4"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
