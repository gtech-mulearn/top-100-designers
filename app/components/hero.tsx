import Image from "next/image";
import React from "react";
import AnimatedPara from "./animatedPara";

const Hero = () => {
  const intro =
    "Our mission is to bring together the top 100 designers in the country and drive a design movement from within. We aim to support talented individuals by offering a platform where they can take on challenges,refine their skills, and excel in their craft.";
  return (
    <div className="flex justify-end items-center max-md:flex-col">
      <div className="flex flex-col gap-8 pl-12">
        <h1 className="text-primary text-7xl font-gilroyBold">
          <AnimatedPara gap={1} words={"The future of design awaits you!"} />
        </h1>
        <div className="text-xl max-w-[80%] font-gilroyMedium">
          <AnimatedPara words={intro} />
        </div>
        <div className="flex flex-col uppercase leading-tight pt-8 ">
          <div className=" text-4xl tracking-[1.5rem] font-gilroyBold flex relative">
            PRIZES
            <Image
              draggable={false}
              src={"/money.png"}
              alt="money"
              height={200}
              width={200}
              className="absolute -bottom-10 left-56"
            ></Image>
          </div>
          <p className="text-8xl font-gilroyBold max-sm:text-7xl">
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
