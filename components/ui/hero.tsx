import Image from "next/image";
import React from "react";
import Paragraph from "./animatedText";

const Hero = () => {
  const intro =
    "Our mission is to bring together the top 100 designers in the country and drive a design movement from within. We aim to support talented individuals by offering a platform where they can take on challenges,refine their skills, and excel in their craft.";
  return (
    <div className="flex justify-end items-center max-md:flex-col bg-[url('/bg/bg2.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-3 md:gap-8 pl-12">
        <h1 className="text-primaryText md:text-7xl text-5xl font-gilroyBold">
          <Paragraph paragraph="The future of design awaits you!" />
        </h1>
        <div className="md:text-xl text-base max-w-[80%] font-gilroyMedium text-white ">
          <Paragraph paragraph={intro} />
        </div>
        <div className="flex flex-col uppercase leading-tight pt-8 ">
          <div className=" md:text-4xl text-2xl max-sm:text-lg tracking-[1.5rem] font-gilroyBold flex relative text-white">
            PRIZES
            <Image
              draggable={false}
              src={"/money.png"}
              alt="money"
              height={200}
              width={200}
              className="absolute -bottom-10 left-[25%]"
            ></Image>
          </div>
          <p className="md:text-7xl text-5xl font-gilroyBold max-sm:text-4xl text-white">
            WORTH ₹10,00,000
          </p>
        </div>
      </div>
      <Image
        draggable={false}
        className=""
        src={"/image1.png"}
        alt="heroImage"
        height={750}
        width={750}
      ></Image>
    </div>
  );
};

export default Hero;
