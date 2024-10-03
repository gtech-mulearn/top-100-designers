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
    <div className="min-h-screen bg-[url('/landing/landing_banner.webp')] bg-cover bg-center flex flex-col gap-20 justify-center items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center w-full"
      >
        <Image
          className="max-md:w-1/2"
          draggable={false}
          src={"/landing/sponsors.webp"}
          alt="logo"
          height={400}
          width={400}
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center items-center w-full"
      >
        <Image
          className="max-md:w-1/2"
          draggable={false}
          src={"/landing/big_logo.webp"}
          alt="logo"
          height={400}
          width={400}
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center items-center w-full"
      >
        <Image
          className="max-md:w-1/2"
          draggable={false}
          src={"/landing/landing_text.webp"}
          alt="logo"
          height={400}
          width={400}
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
