"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import EmailBox from "../email-box";
import ContactBox from "../contact-box";
import {motion} from "motion/react";

const ContactSection = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 0.2}}
      transition={{delayChildren: 0.3, staggerChildren: 0.3}}
      className="py-32 bg-green-custom/15 "
    >
      <WrapperMain className="grid grid-cols-1 lg:grid-cols-2 gap-y-20">
        <ContactBox />
        <EmailBox />
      </WrapperMain>
    </motion.section>
  );
};

export default ContactSection;
