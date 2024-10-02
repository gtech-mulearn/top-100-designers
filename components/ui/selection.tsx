"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Frame from "./frame";
import Paragraph from "./animatedText";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({
  title,
  description,
  active = false,
  index,
  setIndex,
  gridClass,
  windowWidth,
}: {
  title: string;
  description: string;
  active?: boolean;
  index: number;
  setIndex: (index: number) => void;
  gridClass: string;
  windowWidth: number;
}) => {
  const splitTitle = title.split(" ");
  const isMobile = windowWidth < 768;

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: active && windowWidth > 1280 ? 1.4 : 1,
        zIndex: active ? 30 : 0,
      }}
      transition={{ duration: 0.3 }}
      onClick={() => setIndex(index)}
      className={`bg-black z-0 relative transition-all duration-300 cursor-pointer ease-in-out div${gridClass} 
        ${active && "center-card"} card-${index + 1}`}
    >
      <Frame strength={8} color={active ? "#3989FF" : "white "}>
        <div
          style={{
            backgroundImage: "url('/filter.png')",
          }}
          className="flex flex-col md:pr-2 md:min-h-[400px] max-sm:min-h-[300px] max-sm:max-w-[250px] max-w-[350px] justify-start items-center md:p-8 text-center"
        >
          <h1
            className={`text-primaryText ${
              isMobile ? "text-3xl" : "md:text-5xl"
            } font-gilroyBold pb-4`}
          >
            <span className={`${active && "font-gilroyMedium"}`}>
              {splitTitle[0]}
            </span>{" "}
            <br />{" "}
            <span className={`${!active && "font-gilroyMedium"}`}>
              {splitTitle[1]}
            </span>
          </h1>
          <div
            className={`${
              isMobile ? "text-lg" : "md:text-xl"
            } font-gilroyMedium leading-tight text-white`}
          >
            {description}
          </div>
        </div>
      </Frame>
    </motion.div>
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

  const container = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getGridClass = (index: number) => {
    if (index === activeIndex) return "center-card";
    if (index < activeIndex) return `div${index + 1}`;
    return `div${index + 1}`;
  };

  return (
    <div className="flex justify-between items-center max-md:flex-col bg-[url('/bg/bg3.webp')] bg-cover bg-center max-2xl:pt-24 max-2xl:pb-48">
      <div className="flex flex-col gap-32 ld:gap-32 flex-1 justify-center items-center">
        <div>
          <h1 className="text-primaryText md:text-7xl text-5xl font-gilroyBold">
            <Paragraph paragraph={"Criteria for Selection"} />
          </h1>
          <div className="md:text-xl text-base  font-gilroyMedium text-center text-white">
            <Paragraph
              paragraph={
                "We're looking for top Designers who excel in the following areas:"
              }
            />
          </div>
        </div>
        <div
          ref={container}
          className="xl:grid xl:grid-cols-3 flex max-xl:flex max-xl:gap-12 max-xl:flex-col justify-center items-center gap-4 relative max-md:p-4 "
        >
          {cardData.map((data, i) => (
            <AnimatePresence key={i}>
              <Card
                active={i === activeIndex}
                title={data.title}
                index={i}
                setIndex={setActiveIndex}
                key={i}
                description={data.description}
                gridClass={getGridClass(i)}
                windowWidth={windowWidth}
              />
            </AnimatePresence>
          ))}
        </div>
      </div>
      <Image
        src={"/image3.png"}
        alt="selection image"
        className="max-2xl:hidden"
        height={500}
        width={500}
        draggable={false}
      ></Image>
    </div>
  );
};

export default Selection;
