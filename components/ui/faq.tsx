"use client";
import Image from "next/image";
import React from "react";
import AnimatedPara from "./animatedPara";
// import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiMinusSm } from "react-icons/hi";

const Faq = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // const accData = [
  //   {
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur iste laudantium cum ipsam distinctio amet eaque in velit necessitatibus repellendus. Repellendus, porro molestias dicta deleniti ratione rerum? Similique, hic quo!",
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur iste laudantium cum ipsam distinctio amet eaque in velit necessitatibus repellendus. Repellendus, porro molestias dicta deleniti ratione rerum? Similique, hic quo!",
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur iste laudantium cum ipsam distinctio amet eaque in velit necessitatibus repellendus. Repellendus, porro molestias dicta deleniti ratione rerum? Similique, hic quo!",
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur iste laudantium cum ipsam distinctio amet eaque in velit necessitatibus repellendus. Repellendus, porro molestias dicta deleniti ratione rerum? Similique, hic quo!",
  //   },
  // ];

  return (
    <div className="bg-[url('/bg/bg4.webp')] bg-center bg-cover flex flex-col gap-16 pl-12 py-20">
      <h1 className="md:text-7xl text-5xl font-gilroyBold text-primaryText">
        <AnimatedPara gap={1} words={"Frequently Asked Questions"} />
      </h1>
      <div className="flex justify-between gap-28">
        {/* <div className="flex flex-col gap-8 max-w-[40%]">
          {accData.map((e, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.5 }}
              style={{
                borderColor: activeIndex !== i ? "#3989FF" : "white",
              }}
              className="border-2 pl-4 pr-0 flex gap-5 justify-between w-full"
            >
              <div className="pt-4 font-gilroyMedium text-lg">0{i + 1}</div>
              <div>
                <div className="py-4 font-gilroyMedium text-lg text-left">
                  {e.title}
                </div>
                <AnimatePresence initial={false}>
                  {activeIndex === i && (
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
                  )}
                </AnimatePresence>
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
                {activeIndex === i ? "-" : "+"}
              </div>
            </motion.div>
          ))}
        </div> */}
        <Accordion type="single" collapsible className="w-full text-white">
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
        </Accordion>
        <Image
          className="w-1/2 max-sm:hidden"
          src="/image4 copy.png"
          alt="image4"
          height={800}
          width={800}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Faq;
