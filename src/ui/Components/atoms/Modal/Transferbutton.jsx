'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "w-[128px]",
  height: "h-[60px]",
  text: "이체하기",
  bgColor: "bg-[#D9D9D9]",
  textColor: "text-black",
  radius: "rounded-md"  
};

const TransferButton = ({ 
  onClick,
  width = BUTTON_DEFAULT.width,
  height = BUTTON_DEFAULT.height,
  text = BUTTON_DEFAULT.text,
  radius = BUTTON_DEFAULT.radius,
  bgColor = BUTTON_DEFAULT.bgColor,    
  textColor = BUTTON_DEFAULT.textColor
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${textColor}
        ${radius}
        px-6
        py-3
      `}
    >
      {text}
    </button>
  );
};

export default TransferButton;