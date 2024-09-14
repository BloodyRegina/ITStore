import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import React, { useState, useRef } from "react";
const Navbar = () => {
  const [iconName, setIconName] = useState("menu");
  const iconRef = useRef();
  const navlinksRef = useRef();

  const onToggleMenu = () => {
    const newName = iconName === "menu" ? "close" : "menu";
    setIconName(newName);
    iconRef.current.name = newName;

    // Toggle the class for the navlinks
    if (navlinksRef.current) {
      navlinksRef.current.classList.toggle("top-[9.5%]");
      navlinksRef.current.classList.toggle("-top-full");
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center xl:px-20 px-10">
      <div className="xl:flex items-center lg:gap-24 gap-0">
        <div className="flex items-center justify-center text-white">
          <button className="flex justify-center items-center mr-2 lg:hidden text-white text-3xl">
            <ion-icon
              ref={iconRef}
              name={iconName}
              className="cursor-pointer"
              onClick={onToggleMenu}
            ></ion-icon>
          </button>
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-12 mr-2" />

          {/* Brand Text */}
          <span
            className="flex text-white font-semibold
          logo text-[40px] gap-2"
          >
            PPGP <span className="text-blue-600">IT</span>
          </span>
          <div
            className="absolute bg-white min-h-[25vh] left-0 -top-full w-full flex items-center z-[999] lg:static lg:bg-black lg:min-h-[92px] transition-all duration-300"
            ref={navlinksRef}
          >
            <ul className="flex flex-col lg:flex-row lg:ml-8 lg:gap-16 xl:gap-24 text-2xl w-full justify-center items-center gap-4">
              <li className="">
                <NavLink
                  to="/"
                  className="lg:text-white text-black hover:text-blue-600 lg:block transition-all duration-500"
                >
                  Home
                  <hr className="lg:hidden"/>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/product"
                  className="lg:text-white text-black hover:text-blue-600 lg:block transition-all duration-500 "
                >
                  Product
                  <hr className="lg:hidden"/>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/contact"
                  className="lg:text-white text-black hover:text-blue-600 lg:block transition-all duration-500 "
                >
                  Contact
                  <hr className="lg:hidden"/>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/about"
                  className="lg:text-white text-black hover:text-blue-600 lg:block transition-all duration-500"
                >
                  About
                  <hr className="lg:hidden"/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex text-white gap-10">
        <button onClick={togglePopUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>


          {isOpen && (
          <div className="fixed top-20 right-[9%] bg-white flex justify-center items-center w-[375px] h-[470px] z-[999] rounded-[40px]">
            <div className="bg-white text-black py-[50px] gap-[25px] flex flex-col">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="95"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-user-round"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <h1 className="text-[32px] font-semibold">ลงชื่อเข้าใช้</h1>
              </div>
              <div className="flex w-[259] h-[34px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-round"
                  className="bg-black p-[7px]"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
                <input
                  type="text"
                  className="w-[225px] h-[34px] border-black border-[1px] px-[15px]"
                  placeholder="ชื่อผู้ใช้งาน"
                />
              </div>
              <div className="flex w-[259] h-[34px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock-keyhole"
                  className="bg-black p-[7px]"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <input
                  type="password"
                  className="border-black border-[1px] w-[225px] h-[34px] px-[15px]"
                  placeholder="รหัสผ่าน"
                />
              </div>
              <button className="w-[259px] h-[57px] rounded-[20px] bg-black text-white text-[32px] font-semibold">ล็อคอิน</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
