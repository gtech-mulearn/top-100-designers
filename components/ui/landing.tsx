"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[url('/bg/main_bg.webp')] bg-cover bg-center flex flex-col gap-24 justify-center items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          draggable={false}
          src={"/logos.webp"}
          alt="logo"
          height={500}
          width={500}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          draggable={false}
          src={"/main_logo.webp"}
          alt="logo"
          height={500}
          width={500}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          draggable={false}
          src={"/content.webp"}
          alt="logo"
          height={500}
          width={500}
        />
      </motion.div>
    </div>
  );
};

export default Landing;
