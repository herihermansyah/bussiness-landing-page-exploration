"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Image from "next/image";
import Button from "../ui/button";
import {motion, Variants} from "motion/react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
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

const CtaBannerSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      className="relative overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="w-full h-112 relative overflow-hidden bg-blend-darken"
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1653971858569-8a0fa1d2b790?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="banner"
          fill
          className="object-cover  w-full"
        />
        <div className="inset-0 bg-black/79 z-2 absolute"></div>
      </motion.div>
      <WrapperMain className="absolute top-1/2 -translate-y-1/2 z-5 inset-x-0">
        <div className="flex flex-col items-center gap-10 py-33">
          <div className="flex flex-col items-center gap-1 text-center">
            <motion.h3
              variants={itemVariants}
              className="font-bold font-libre-baskerville text-[32px] text-white"
            >
              Unlocking Potential Through Tailored Solutions
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-[24px] text-white "
            >
              Empowering Businesses with Comprehensive Solutions and Data
              Insights
            </motion.p>
          </div>
          <motion.div variants={itemVariants} className="flex gap-5 flex-wrap">
            <Button size={"lg"}>Get Started</Button>
            <Button size={"lg"} variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default CtaBannerSection;
