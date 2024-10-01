"use client";

import Image from "next/image";
import React, { useState } from "react";
import AnimatedPara from "./animatedPara";
import Frame from "./frame";

const Card = ({
  title,
  description,
  active = false,
  index,
  setIndex,
}: {
  title: string;
  description: string;
  active?: boolean;
  index: number;
  setIndex: (index: number) => void;
}) => {
  const splitTitle = title.split(" ");
  return (
    <div
      onClick={() => setIndex(index)}
      className="bg-black z-0 relative transition-all duration-300 cursor-pointer ease-in-out"
      style={{
        transform: `scale(${active ? 1.3 : 1})`,
        zIndex: active ? 30 : 0,
      }}
    >
      <Frame strength={8} color={active ? "#3989FF" : "white "}>
        <div
          style={{
            backgroundImage: "url('/filter.png')",
            height: "400px",
            // scale: scale,
          }}
          className="flex flex-col pr-2 md:max-w-[350px] justify-start items-center p-8 text-center"
        >
          <h1 className="text-primaryText md:text-5xl text-3xl font-gilroyBold pb-8">
            <span className={`${active && "font-gilroyMedium"}`}>
              {splitTitle[0]}
            </span>{" "}
            <br />{" "}
            <span className={`${!active && "font-gilroyMedium"}`}>
              {splitTitle[1]}
            </span>
          </h1>
          <div className="md:text-xl font-gilroyMedium leading-tight text-white">
            {description}
          </div>
        </div>
      </Frame>
    </div>
  );
};

const Selection = () => {
  const cardData = [
    {
      title: "Portfolio Review",
      description:
        "Evaluate creativity, skills, and impact through submitted portfolios. Evaluate creativity, skills, and impact through submitted portfolios.",
    },
    {
      title: "Design Challenges",
      description:
        "Timed challenges to assess adaptability, technical proficiency, and problem-solving abilities. Timed challenges to assess adaptability, technical proficiency, and problem-solving abilities.",
    },
    {
      title: "Presentation Feedback",
      description:
        "Present designs to a panel of industry experts and receive constructive feedback. Present designs to a panel of industry experts and receive constructive feedback.",
    },
  ];

  const [activeIndex, setactiveIndex] = useState(1);
  return (
    <div className="flex justify-between items-center max-md:flex-col bg-[url('/bg/bg3.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-32 flex-1 justify-center items-center">
        <div>
          <h1 className="text-primaryText md:text-7xl text-5xl font-gilroyBold">
            <AnimatedPara gap={1} words={"Criteria for Selection"} />
          </h1>
          <div className="md:text-xl text-base  font-gilroyMedium text-center text-white">
            <AnimatedPara
              words={
                "We're looking for top Designers who excel in the following areas:"
              }
            />
          </div>
        </div>
        <div className="flex max-sm:hidden relative">
          {cardData.map((data, i) => (
            <Card
              active={i == activeIndex ? true : false}
              title={data.title}
              index={i}
              setIndex={setactiveIndex}
              key={i}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <Image
        src={"/image3.png"}
        alt="selection image"
        className="max-md:hidden"
        height={500}
        width={500}
        draggable={false}
      ></Image>
    </div>
  );
};

export default Selection;
