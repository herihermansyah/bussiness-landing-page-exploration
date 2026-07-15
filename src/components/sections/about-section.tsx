"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Image from "next/image";
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

const AboutSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      className="bg-green-custom/15 py-30 overflow-hidden"
    >
      <WrapperMain className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="relative aspect-square">
          <motion.div variants={itemVariants} className="relative w-full h-full">
            <Image
              src={"/about.svg"}
              alt="about"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="absolute -top-10 -z-2 -left-5 w-30 h-110 bg-red-500"
          />
          <motion.div
            variants={itemVariants}
            className="absolute -right-12 -bottom-12 -z-2 grid grid-cols-7 gap-3"
          >
            {Array.from({length: 84}, (_, index) => (
              <div key={index} className="w-4 h-4 bg-red-500 rounded-full" />
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-5">
          <motion.h3
            variants={itemVariants}
            className="text-[32px] sm:text-[48px] font-bold leading-[120%] font-libre-baskerville"
          >
            We Are
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-[22px] font-medium leading-[130%] text-gray-500"
          >
            ONORI-B Enterprise is a general trading company with a big
            professional network across the country. We serve corporate
            companies, small business, corporations and government depaments.
            Our expeise is the distribution of dierent range of products
          </motion.p>
          <motion.h3
            variants={itemVariants}
            className="text-[28px] leading-7 font-libre-baskerville"
          >
            Shareholders & Directors
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-[22px] font-medium leading-[130%] text-gray-500"
          >
            There are two directors of the company who are in charge of
            overseeing its management. The company directors are experienced
            business people with several years in the specied niches of the
            business sector from nancial and investment consulting to project
            management and marketing
          </motion.p>
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default AboutSection;
