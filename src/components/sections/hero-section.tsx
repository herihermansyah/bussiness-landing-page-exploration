"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Button from "../ui/button";
import {motion, Variants} from "motion/react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      delayChildren: 0.3,
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-green-custom py-33"
    >
      <WrapperMain className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.h3
            variants={itemVariants}
            className="text-yellow-custom text-[22px] font-medium sm:leading-[130%] -mb-8"
          >
            Transforming Businesses
          </motion.h3>
          <motion.h2
            variants={itemVariants}
            className="text-[40px] md:text-[56px] font-libre-baskerville font-bold text-white"
          >
            Empowering Businesses with Comprehensive{" "}
            <span className="text-yellow-custom">Solutions</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[22px] font-medium leading-[130%] text-white"
          >
            At ONORI-B Enterprise, we are dedicated to empowering businesses of
            all sizes with comprehensive financial and business solutions. Our
            mission is to optimize supply chains, facilitate data-driven
            decision-making, and unlock valuable insights for your organization.
          </motion.p>
        </div>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center    items-center gap-5"
        >
          <Button size={"lg"}>Get Started</Button>
          <Button size={"lg"} variant={"outline"}>
            Get Started
          </Button>
        </motion.div>
      </WrapperMain>
    </motion.section>
  );
};

export default HeroSection;
