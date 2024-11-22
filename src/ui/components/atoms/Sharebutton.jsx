"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { Share2Icon } from "@radix-ui/react-icons";

const ShareButton = ({ size = "small", color = "sub", rounded = false, onClick }) => {
  return (
    <CustomButton size={size} color={color} rounded={rounded} onClick={onClick}>
      <Share2Icon className="w-[21px] h-[21px]" />
    </CustomButton>
  );
};

export default ShareButton;
