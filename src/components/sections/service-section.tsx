"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import {motion, Variants} from "motion/react";

interface ServiceDataType {
  id: number;
  name: string;
  description: string;
}

const serviceData: ServiceDataType[] = Array.from({length: 6}, (_, index) => ({
  id: index + 1,
  name: "Branding & Office Supplies",
  description:
    "Elevate your brand with tailored stationery and streamline office essentials for a professional touch.",
}));

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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

const ServiceSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      className="py-33"
    >
      <WrapperMain className="flex flex-col gap-25">
        <div className="flex flex-col gap-7 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-[48px] font-bold leading-12 sm:leading-7"
          >
            WE PROVIDE BEST SERVICES
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[22px] font-medium leading-[130%] text-gray-500"
          >
            Discover excellence with our comprehensive range of services
            tailored to meet your needs. With a commitment to quality,
            innovation, and customer satisfaction, we go above and beyond to
            deliver the best solutions for your business. Trust us to exceed
            your expectations and propel your success forward
          </motion.p>
        </div>
        <div className="grid grid-cols-1 dm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="flex flex-col gap-5 py-10 px-5 border-2 border-dotted border-gray-300 rounded-4xl text-center"
            >
              <h5 className="font-bold text-[24px] font-libre-baskerville">
                {item.name}
              </h5>
              <p className="text-[18px] text-gray-500 font-medium leading-[130%]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default ServiceSection;
