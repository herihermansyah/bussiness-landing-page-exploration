"use client";
import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import WrapperMain from "@/components/wrapper-main";
import {cn} from "@/lib/utils";
import React from "react";
import {AnimatePresence, motion, Variants} from "motion/react";
import {IoMenu} from "react-icons/io5";
import {CgClose} from "react-icons/cg";

const menuVariants: Variants = {
  open: {
    opacity: 1,
    y: "66%",
    transition: {
      stiffness: 100,
      type: "spring",
      damping: 15,
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      stiffness: 100,
      type: "spring",
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white relative">
      <WrapperMain className="flex items-center justify-between py-2 md:py-3">
        <Logo />
        <MenuHeader className="hidden md:flex" />
        <Button className="hidden md:block">Get Started</Button>
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={typeof window !== "undefined" && isOpen ? "open" : "closed"}
          className={cn(
            "absolute -z-2 w-full left-1/2 -translate-x-1/2",
            "bg-white py-7",
            "flex flex-col gap-5 items-center",
            "md:hidden",
          )}
        >
          <MenuHeader className="flex-col gap-5 items-center" />
          <Button>Get Started</Button>
        </motion.div>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="flex p-1 text-[30px] md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "closed" : "open"}
              initial={{opacity: 0, rotate: -90, scale: 0.6}}
              animate={{opacity: 1, rotate: 0, scale: 1}}
              exit={{opacity: 0, rotate: 90, scale: 0.8}}
              transition={{duration: 0.2}}
            >
              {isOpen ? <CgClose /> : <IoMenu />}
            </motion.span>
          </AnimatePresence>
        </Button>
      </WrapperMain>
    </div>
  );
};

export default Header;
