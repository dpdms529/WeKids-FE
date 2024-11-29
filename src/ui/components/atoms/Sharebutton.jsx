"use client";

import { Share2Icon } from "@radix-ui/react-icons";
import CustomButton from "./CustomButton";

const ShareButton = ({
  size = "medium",
  color = "sub",
  rounded = false,
  onClick,
}) => {
  return (
    <CustomButton
      size={size}
      color={color}
      rounded={rounded}
      onClick={onClick}
      className="w-[76px]"
    >
      <Share2Icon className="w-[21px] h-[21px]" />
    </CustomButton>
  );
};

export default ShareButton;
