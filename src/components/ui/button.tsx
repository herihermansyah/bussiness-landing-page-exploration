"use client";
import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {cva, VariantProps} from "class-variance-authority";
import {HTMLMotionProps, motion} from "motion/react";

const buttonVariants = cva(
  "font-bold cursor-pointer disabled:cursor-not-allowed active:scale-98",
  {
    variants: {
      variant: {
        fill: "bg-yellow-custom text-black",
        outline: "ring-2 ring-white text-white ",
      },
      size: {
        sm: "px-3 py-1.5 rounded-lg text-[18px]",
        lg: "px-6 py-2 rounded-xl text-[20px]",
      },
    },

    defaultVariants: {
      variant: "fill",
      size: "sm",
    },
  },
);

type ButtonProps = HTMLMotionProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, className, variant, size, ...props}, ref) => {
    return (
      <motion.button
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.4,
          scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
        ref={ref}
        {...props}
        className={cn(buttonVariants({variant, size}), className)}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
