import Image from "next/image";
import React from "react";
import AnimatedPara from "./animatedPara";

const About = () => {
  return (
    <div className="flex justify-center items-center max-md:flex-col bg-[url('/bg/bg3.webp')] bg-cover bg-center">
      <Image
        className=""
        src={"/image2.png"}
        alt="aboutImage"
        height={750}
        width={750}
        draggable={false}
      ></Image>
      <div className="flex flex-col gap-5 text-right pr-2">
        <h1 className="text-primary text-7xl font-gilroyBold pb-8">
          <AnimatedPara gap={1} words={"What is Top 100 Designers?"} />
        </h1>
        <div className="text-xl  font-gilroyMedium ">
          <AnimatedPara
            words={
              "Top100 Designers, organized by μLearn in collaboration with the Kerala Startup Mission, is an initiative to discover and showcase India's top design talent. The competition commemerates talented designers irrespective of their experience through a series of curated tasks, enabling participants to learn, compete, and join an exclusive community of designers."
            }
          />
        </div>
        <div className="text-xl  font-gilroyMedium ">
          <AnimatedPara
            words={
              "The event not only fosters a collaborative environment where designers can express their creative visions but also assists corporations in finding exceptional design talent. It's an opportunity for creative virtuosos to shine and for companies to connect with some of the best designers in the country."
            }
          />
        </div>
        <div className="text-xl  font-gilroyMedium ">
          <AnimatedPara
            words={
              "Along with Huddle and KSUM, μLearn aims to replicate the success of the Top100 Coders event, held in partnership with OpenAI and Beckn to identify India's top coding talent, in the design and hardware field, providing a platform for designers and makers to showcase their skills and connect with industry leaders."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
