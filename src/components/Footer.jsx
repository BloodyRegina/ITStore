import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black p-4 text-center text-white">
      {/* Add mt-auto */}
      <div className="flex justify-between lg:mx[200px] mx-[50px]">
        <div className="flex gap-3">
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
            class="lucide lucide-copyright"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
          <p>2025 PPGP IT | All rights reserved.</p>
        </div>
        <div className="flex text-white gap-3">
          <a href="https://x.com/home" className="before:hidden" target="blank">
              <img src="/images/twitter.png" className="w-6" alt="" />
          </a>
          <a href="https://www.youtube.com/" target="blank" className="before:hidden">
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
              class="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="blank" className="before:hidden">
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
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.facebook.com/" target="blank" className="before:hidden">
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
              class="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://discord.gg/G7Xr3jX9ww" target="blank" className="before:hidden"><img src="/images/discord.png" className="w-6" alt="" /></a>
        </div>
      </div>
      <div className="flex mt-2 text-white">
        <hr className="w-[2.5%] border-[#FF0000] border-[1.5px]" />
        <hr className="w-[95%] border-[1.5px] border-[#FFFFFF]" />
        <hr className="w-[2.5%] border-[#FF0000] border-[1.5px]" />
      </div>
      <div className="flex items-center justify-center my-[100px]">
        {/* Logo */}
        <img src="/images/logo.png" alt="Logo" className="w-24 mr-2"/>

        {/* Brand Text */}
        <span
          className="text-white font-semibold
          logo text-8xl"
        >
          PPGP <span className="text-blue-600">IT</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
