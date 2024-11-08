"use client";

import React from "react";

const sizes = {
  small: "w-[131px] h-[60px]",
  medium: "w-[262px] h-[60px]",
  large: "w-[393px] h-[60px]",
};

const colors = {
  main: "bg-main02 text-white hover:bg-main01",
  sub: "bg-sub02 text-white hover:bg-sub01",
  gray: "bg-stone-300 text-white hover:bg-neutral-400",
  black10: "bg-black text-white bg-opacity-10 hover:bg-opacity-20",
  black40: "bg-black text-white bg-opacity-40 hover:bg-opacity-30",
  black80: "bg-black text-white bg-opacity-80 hover:bg-opacity-70",
};

const CustomButton = ({
  children,
  color = "main",
  size = "large",
  rounded = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={`flex items-center justify-center text-R-20 ${colors[color]} ${sizes[size]} ${
        rounded ? "rounded-[11px]" : "rounded-none"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
