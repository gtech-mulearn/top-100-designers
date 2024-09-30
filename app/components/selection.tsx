import Image from "next/image";
import React from "react";
import AnimatedPara from "./animatedPara";
import Frame from "./frame";

const Card = ({
  title,
  description,
  frameColor = "white",
}: {
  title: string;
  description: string;
  frameColor?: string;
}) => {
  return (
    <Frame color={frameColor}>
      <div
        style={{
          backgroundImage: "url('/filter.png')",
        }}
        className="flex flex-col gap-5 pr-2 min-h-[500px] max-w-[400px] relative justify-start items-center p-8 text-center"
      >
        <h1 className="text-primary text-7xl font-gilroyBold pb-8">{title}</h1>
        <div className="text-xl  font-gilroyMedium ">{description}</div>
      </div>
    </Frame>
  );
};

const Selection = () => {
  const cardData = [
    {
      title: "Design Skills",
      description:
        "We're looking for designers who have a strong foundation in design principles, typography, color theory, and layout design.",
    },
    {
      title: "Problem Solving",
      description:
        "We're looking for designers who can solve complex problems and design solutions that are both functional and visually appealing.",
    },
    {
      title: "Creativity",
      description:
        "We're looking for designers who can think outside the box and come up with innovative design solutions.",
    },
  ];
  return (
    <div className="flex justify-center items-center max-md:flex-col bg-[url('/bg/bg4.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-32 items-start">
        <div>
          <h1 className="text-primary text-7xl font-gilroyBold">
            <AnimatedPara gap={1} words={"Criteria for Selection"} />
          </h1>
          <div className="text-xl  font-gilroyMedium text-center">
            <AnimatedPara
              words={
                "We're looking for top Designers who excel in the following areas:"
              }
            />
          </div>
        </div>
        <div className="flex max-sm:hidden">
          {cardData.map((data, i) => (
            <Card title={data.title} key={i} description={data.description} />
          ))}
        </div>
      </div>
      <Image
        src={"/image3.png"}
        alt="selection image"
        height={500}
        width={500}
      ></Image>
    </div>
  );
};

export default Selection;
