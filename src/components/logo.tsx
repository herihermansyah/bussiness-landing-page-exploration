"use client";
import Image from "next/image";
import React from "react";
import {motion, Variants} from "motion/react";

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Logo = () => {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      id="home"
    >
      <Image src="/logo.svg" alt="logo" width={70} height={70} priority />
    </motion.div>
  );
};

export default Logo;
