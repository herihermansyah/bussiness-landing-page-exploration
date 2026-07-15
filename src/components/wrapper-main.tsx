import {cn} from "@/lib/utils";
import React from "react";

const WrapperMain = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto lg:w-main px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};

export default WrapperMain;
