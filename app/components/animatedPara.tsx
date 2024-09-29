"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Char = ({ char }: { char: string }) => {
  return <span className="char">{char}</span>;
};

const Word = ({ word, gap }: { word: string; gap: number }) => {
  const gapClass = `mr-${gap}`;
  return (
    <div style={{ display: "inline-block", marginRight: `${gap}rem` }}>
      {word.split("").map((char, index) => (
        <Char char={char} key={index} />
      ))}
    </div>
  );
};

const AnimatedPara = ({
  words,
  gap = 0.5,
}: {
  words: string;
  gap?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".char", {
        duration: 1,
        // autoAlpha: 0,
        opacity: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      {words.split(" ").map((char, index) => (
        <Word word={char} gap={gap} key={index} />
      ))}
    </div>
  );
};

export default AnimatedPara;
