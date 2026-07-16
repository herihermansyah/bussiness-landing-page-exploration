"use client";
import {cn} from "@/lib/utils";
import React from "react";
import Button from "./ui/button";
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
      damping: 15,
      stiffness: 100,
      type: "spring",
    },
  },
};
const EmailBox = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-5 p-8 bg-white rounded-xl"
    >
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <motion.label variants={itemVariants} htmlFor="email">
            Email
          </motion.label>
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Example@gmail.com"
            name="email"
            id="email"
            className={cn(
              "outline-none border rounded-xl bg-white border-gray-300 px-4 py-3 w-full",
            )}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <motion.label variants={itemVariants} htmlFor="message">
            Message
          </motion.label>
          <motion.textarea
            variants={itemVariants}
            name="message"
            id="message"
            placeholder="Your Message"
            className={cn(
              "outline-none border border-gray-300 px-4 py-3 w-full rounded-xl bg-white h-63",
            )}
          />
        </div>
        <Button
          className="bg-green-custom w-full text-white"
          type="submit"
          size="lg"
        >
          Send
        </Button>
      </form>
    </motion.div>
  );
};

export default EmailBox;
