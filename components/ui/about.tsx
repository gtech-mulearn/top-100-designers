import Image from "next/image";
import React from "react";
// import AnimatedPara from "./animatedPara";
import Paragraph from "./animatedText";

const About = () => {
  return (
    <div className="flex md:justify-center items-center max-xl:items-start max-xl:flex-col bg-[url('/bg/bg3.webp')] bg-cover bg-center max-lg:p-5">
      <Image
        className="max-lg:hidden"
        src={"/image2.png"}
        alt="aboutImage"
        height={750}
        width={750}
        draggable={false}
      ></Image>
      <div className="flex flex-col gap-5 text-right pr-2 pt-24">
        <h1 className="text-primaryText md:text-7xl text-5xl font-gilroyBold pb-8">
          <Paragraph paragraph={"What is Top 100 Designers?"} />
        </h1>
        <div className="md:text-xl text-base  font-gilroyMedium text-white ">
          <Paragraph
            paragraph={
              "Top100 Designers, organized by μLearn in collaboration with the Kerala Startup Mission, is an initiative to discover and showcase India's top design talent. The competition commemerates talented designers irrespective of their experience through a series of curated tasks, enabling participants to learn, compete, and join an exclusive community of designers."
            }
          />
        </div>
        <div className="md:text-xl  font-gilroyMedium text-white">
          <Paragraph
            paragraph={
              "The event not only fosters a collaborative environment where designers can express their creative visions but also assists corporations in finding exceptional design talent. It's an opportunity for creative virtuosos to shine and for companies to connect with some of the best designers in the country."
            }
          />
        </div>
        <div className="md:text-xl  font-gilroyMedium text-white">
          <Paragraph
            paragraph={
              "Along with Huddle and KSUM, μLearn aims to replicate the success of the Top100 Coders event, held in partnership with OpenAI and Beckn to identify India's top coding talent, in the design and hardware field, providing a platform for designers and makers to showcase their skills and connect with industry leaders."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
