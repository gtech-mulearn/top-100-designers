"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
interface ParagraphProps {
  paragraph: string;
}
interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}
export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.45"],
  });
  const words = paragraph.split(" ");
  return (
    <p ref={container} className="flex flex-wrap leading-none text-white">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // console.log(start, end);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-2 mt-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
