"use client";
import React from "react";
import {motion, Variants} from "motion/react";
import {cn} from "@/lib/utils";

interface MenuDataType {
  name: string;
  link: string;
}

const menuData: MenuDataType[] = [
  {name: "home", link: "#home"},
  {name: "about us", link: "#about"},
  {name: "service", link: "#service"},
  {name: "contact", link: "#contact"},
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
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
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

interface MenuHeaderProps {
  className?: string;
}

const MenuHeader = ({className}: MenuHeaderProps) => {
  return (
    <nav aria-label="menu header">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "font-inter flex items-center gap-10.5 font-semibold",
          className,
        )}
      >
        {menuData.map((item, index) => (
          <motion.li variants={itemVariants} key={index}>
            <a
              href={item.link}
              className="hover:text-yellow-custom capitalize text-[18px] transition-all duration-300 ease-in-out"
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default MenuHeader;
