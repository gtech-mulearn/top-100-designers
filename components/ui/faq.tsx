"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Paragraph from "./animatedText";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accData = [
    {
      title: "Is it beginner-friendly?",
      description: "  Yes, it’s open to all skill levels.",
    },
    {
      title: "What happens after the selection process?",
      description:
        "Participants complete tasks, then move on to the final challenge.",
    },
    {
      title: "How do I apply?",
      description: "Apply through the Huddle Global website.",
    },
  ];

  return (
    <div className="bg-[url('/bg/bg4.webp')] bg-center bg-cover flex flex-col gap-16 lg:pl-12 max-lg:p-5 pt-32">
      <h1 className="md:text-7xl text-5xl font-gilroyBold text-primaryText">
        <Paragraph paragraph={"Frequently Asked Questions"} />
      </h1>
      <div className="flex max-lg:gap-0 max-lg:flex-col-reverse justify-between 2xl:gap-28">
        <div className="flex flex-col gap-8 xl:max-w-[40%] pb-20 max-xl:pr-4">
          {accData.map((e, i) => (
            <motion.div
              layoutId={`faq-${i}`}
              key={i}
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
              }}
              style={{
                borderColor: activeIndex !== i ? "#3989FF" : "white",
                height: activeIndex === i ? "auto" : "4rem",
              }}
              className="border-2 pl-4 pr-0 flex gap-5 justify-between w-full overflow-hidden"
            >
              <div className="pt-4 font-gilroyMedium text-lg text-primaryText">
                0{i + 1}
              </div>
              <div className="flex-1">
                <div className="py-4 font-gilroyMedium md:text-lg text-left text-primaryText max-sm:leading-none">
                  {e.title}
                </div>
                {
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white py-4 overflow-hidden"
                  >
                    {e.description}
                  </motion.div>
                }
              </div>
              <div
                onClick={() => {
                  setActiveIndex(activeIndex === i ? null : i);
                }}
                style={{
                  backgroundColor: activeIndex !== i ? "#3989FF" : "white",
                  color: activeIndex === i ? "#3989FF" : "white",
                }}
                className="p-2 px-5 max-h-16 h-full flex justify-center items-center bg-red-50 text-3xl cursor-pointer"
              >
                {activeIndex === i ? <LuMinus /> : <LuPlus />}
              </div>
            </motion.div>
          ))}
        </div>
        {/* <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-3 px-4 w-full justify-between  ">
                1 girngrngoi{" "}
                <div className="">
                  <HiMinusSm className="text-xl" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <Image
          className="xl:w-1/2 max-xl:hidden"
          src="/image4 copy.png"
          alt="image4"
          height={800}
          width={800}
          draggable={false}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Faq;
