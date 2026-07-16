"use client";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import WrapperMain from "@/components/wrapper-main";
import React from "react";
import {motion} from "motion/react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  className="bg-green-custom py-15">
      <WrapperMain className="flex flex-col items-center gap-7">
        <div className="flex flex-col gap-5 items-center text-center">
          <h5 className="text-gray-500 text-[14px]">Are you ready?</h5>
          <h3 className="text-white text-[32px] font-libre-baskerville ">
            let&apos;s get started
          </h3>
          <Button size="lg">Get Started</Button>
        </div>
        <MenuHeader className="hidden md:flex text-white" />
        <p className="text-gray-500 text-[14px]">
          Copyright &copy; {fullYear}. Onari B. All rights reserved.
        </p>
      </WrapperMain>
    </motion.div>
  );
};

export default Footer;
