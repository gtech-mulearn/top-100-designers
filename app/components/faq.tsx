import Image from "next/image";
import React from "react";
import AnimatedPara from "./animatedPara";

const Faq = () => {
  return (
    <div className=" bg-[url('/bg/bg4.webp')] bg-center bg-cover flex flex-col pl-12 pt-12">
      <h1 className="text-primary text-7xl font-gilroyBold">
        <AnimatedPara gap={1} words={"Frequently Asked Questions"} />
      </h1>
      <div className="flex justify-between">
        <div></div>
        <Image
          src="/image4 copy.png"
          alt="image4"
          height={800}
          width={800}
          draggable={false}
        ></Image>
      </div>
    </div>
  );
};

export default Faq;
