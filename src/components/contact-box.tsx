"use client";
import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi";
import {MdLocationPin} from "react-icons/md";
import {BsGrid3X3Gap} from "react-icons/bs";
import {motion, Variants} from "motion/react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
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
      stiffness: 100,
      damping: 15,
      type: "spring",
    },
  },
};

const ContactBox = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap sm:grid  sm:grid-cols-2 gap-10"
    >
      <Email />
      <Phone />
      <Office />
      <Socials />
    </motion.div>
  );
};

const Email = () => {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-6">
      <div className="w-17 h-17 rounded-full bg-green-custom text-white flex items-center justify-center">
        <MdOutlineEmail size={42} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-green-custom text-[32px] leading-[120%] font-libre-baskerville capitalize">
          email
        </h3>
        <p className="text-[18px] leading-[120%] text-gray-500 capitalize">
          onoribenterpriseltd@gmail.com
        </p>
      </div>
    </motion.div>
  );
};

const Phone = () => {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-6">
      <div className="w-17 h-17 rounded-full bg-green-custom text-white flex items-center justify-center">
        <FiPhoneCall size={42} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-green-custom text-[32px] leading-[120%] font-libre-baskerville capitalize">
          phone
        </h3>
        <p className="text-[18px] leading-[120%] text-gray-500 capitalize flex flex-col gap-1">
          <span> 0105 833 778</span>
          <span>+254 797 168 356</span>
        </p>
      </div>
    </motion.div>
  );
};

const Office = () => {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-6">
      <div className="w-17 h-17 rounded-full bg-green-custom text-white flex items-center justify-center">
        <MdLocationPin size={42} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-green-custom text-[32px] leading-[120%] font-libre-baskerville capitalize">
          office
        </h3>
        <p className="text-[18px] leading-[120%] text-gray-500 capitalize flex flex-col gap-1">
          <span>1686, Geraldine Lane</span>
          <span>Nairobi Kenya</span>
        </p>
      </div>
    </motion.div>
  );
};
const Socials = () => {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-6">
      <div className="w-17 h-17 rounded-full bg-green-custom text-white flex items-center justify-center">
        <BsGrid3X3Gap size={42} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-green-custom text-[32px] leading-[120%] font-libre-baskerville capitalize">
          socials
        </h3>
        <p className="text-[18px] leading-[120%] text-gray-500 capitalize flex flex-col gap-1">
          <span>1686, Geraldine Lane</span>
          <span>Nairobi Kenya</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactBox;
