"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {Navigation, Mousewheel} from "swiper/modules";
import {IoMdArrowDropright} from "react-icons/io";
import {IoMdArrowDropleft} from "react-icons/io";
import {cn} from "@/lib/utils";
import {motion, Variants} from "motion/react";

const testimonialData = Array.from({length: 10}, (_, index) => ({
  id: index + 1,
  name: "John Doe",
  position: "CEO",
  comment:
    "Working with ONORI-B Enterprise has been a game-changer for our business. Their comprehensive financial and business solutions have helped us navigate regulatory requirements and make data-driven decisions.",
  image:
    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}));

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
      damping: 15,
    },
  },
};

const TestimonialSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      className="py-33"
    >
      <WrapperMain className="flex flex-col gap-25 relative">
        <motion.h2
          variants={itemVariants}
          className="text-[36px] font-bold font-libre-baskerville text-center"
        >
          What Our Customers are saying
        </motion.h2>
        <Swiper
          slidesPerView={1}
          loop={true}
          mousewheel={{forceToAxis: true}}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Mousewheel]}
          className="w-full"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center gap-20">
                <motion.p
                  variants={itemVariants}
                  className="text-[24px] lg:w-250 text-center text-gray-500 leading-[130%]"
                >
                  {item.comment}
                </motion.p>
                <div className="flex flex-col text-center items-center gap-2 text-gray-500">
                  <motion.div
                    variants={itemVariants}
                    className="w-15 h-15 relative rounded-full overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                  <motion.h3
                    variants={itemVariants}
                    className="font-medium text-[14px]"
                  >
                    {item.name}
                  </motion.h3>
                  <motion.h4
                    variants={itemVariants}
                    className="font-medium text-[14px] uppercase"
                  >
                    {item.position}
                  </motion.h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* navigation */}
          <motion.button
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{damping: 15, stiffness: 100, type: "spring", delay: 0.4}}
            className={cn(
              "swiper-button-prev absolute top-1/2 -translate-y-1/2 left-5 z-5",
              "text-[32px] rounded-full p-1 w-10 h-10",
              "cursor-pointer ring ring-gray-300 text-gray-400",
              "hover:text-gray-600 ring-gray-600 active:scale-98",
              "bg-white",
            )}
          >
            <IoMdArrowDropleft />
          </motion.button>
          <motion.button
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{damping: 15, stiffness: 100, type: "spring", delay: 0.4}}
            className={cn(
              "swiper-button-next absolute top-1/2 -translate-y-1/2 right-5 z-5",
              "text-[32px] rounded-full p-1 w-10 h-10",
              "cursor-pointer ring ring-gray-300 text-gray-400",
              "hover:text-gray-600 ring-gray-600 active:scale-98",
              "bg-white",
            )}
          >
            <IoMdArrowDropright />
          </motion.button>
        </Swiper>
      </WrapperMain>
    </motion.section>
  );
};

export default TestimonialSection;
