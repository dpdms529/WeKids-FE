"use client";

import { Share2Icon } from "@radix-ui/react-icons";
import CustomButton from "./CustomButton";

const ShareButton = ({
  size = "medium",
  color = "sub",
  rounded = false,
  onClick,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();  // 이벤트 전파 중단
    e.preventDefault();    // 기본 동작 방지
    if (onClick) onClick(e);
  };

  return (
    <CustomButton
      size={size}
      color={color}
      rounded={rounded}
      onClick={handleClick}
      className="w-[76px]"
    >
      <Share2Icon className="w-[21px] h-[21px]" />
    </CustomButton>
  );
};

export default ShareButton;
