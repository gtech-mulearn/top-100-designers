import React from "react";
import Frame from "./frame";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  return (
    <nav className="min-h-24 bg-red-50 sticky top-0 z-50 bg-[url('/bg/nav.webp')] bg-cover bg-center flex justify-between items-center p-4">
      <div className="ml-4">
        <Frame color="white">
          <Image
            src="/logo.svg"
            className="mx-4 my-1"
            alt="logo"
            height={200}
            width={200}
            draggable={false}
          ></Image>
        </Frame>
      </div>
      <div>
        <ul className="flex gap-8 items-center font-gilroyMedium text-lg text-white max-md:hidden">
          <li className="hover:underline transition-all">Home</li>|
          <li className="hover:underline transition-all">About</li>
          <Frame color="white">
            <li className="bg-primaryBg  text-xl px-4 py-1">Participate Now</li>
          </Frame>
        </ul>
        <RxHamburgerMenu className="text-white text-4xl md:hidden" />
      </div>
    </nav>
  );
};

export default Nav;
