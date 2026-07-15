"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import {IoEyeOutline} from "react-icons/io5";
import {TbTargetArrow} from "react-icons/tb";
import {LuClipboardList} from "react-icons/lu";
import {motion, Variants} from "motion/react";

interface VisDataType {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const visData: VisDataType[] = [
  {
    id: 1,
    name: "Vision",
    description:
      "The company of choice, recognized not only for the best quality but also for the contribution to society.",
    icon: <IoEyeOutline />,
  },
  {
    id: 2,
    name: "Mission",
    description:
      "To provide diversity, equality and most impoantly quality of products.",
    icon: <TbTargetArrow />,
  },
  {
    id: 3,
    name: "Vision",
    description:
      "The company of choice, recognized not only for the best quality but also for the contribution to society.",
    icon: <LuClipboardList />,
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
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

const VissionMissionSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      className="py-33 bg-green-custom"
    >
      <WrapperMain>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visData.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="flex flex-col items-center text-center gap-5.5 px-5 py-15 rounded-xl bg-white"
            >
              <div className="text-[100px] text-black">{item.icon}</div>
              <h4 className="text-[32px] font-bold font-libre-baskerville text-gray-500">
                {item.name}
              </h4>
              <p className="text-[22px] font-medium leading-[130%] text-gray-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default VissionMissionSection;
