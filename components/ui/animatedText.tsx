"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, useMemo } from "react";

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Paragraph = ({ paragraph }: ParagraphProps) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = useMemo(() => paragraph.split(" "), [paragraph]);

  return (
    <p ref={container} className="flex flex-wrap leading-none text-white">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <MemoizedWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </MemoizedWord>
        );
      })}
    </p>
  );
};

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  const chars = useMemo(
    () =>
      children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <MemoizedChar key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </MemoizedChar>
        );
      }),
    [children, progress, range, step]
  );

  return <span className="relative mr-2 mt-2">{chars}</span>;
};

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const MemoizedWord = React.memo(Word);
const MemoizedChar = React.memo(Char);

export default Paragraph;
