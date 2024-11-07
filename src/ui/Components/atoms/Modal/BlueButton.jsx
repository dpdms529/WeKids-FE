'use client';
import React from 'react';

const BLUE_BUTTON_DEFAULT = {
  width: "w-[76px]",
  height: "h-[57px]",
  bgColor: "bg-[#123F6D]",
  hoverColor: "hover:bg-[#0e325a]",
};

const BlueButton = ({ 
  onClick,
  width = BLUE_BUTTON_DEFAULT.width, 
  height = BLUE_BUTTON_DEFAULT.height,
  bgColor = BLUE_BUTTON_DEFAULT.bgColor 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${BLUE_BUTTON_DEFAULT.hoverColor}
        flex
        items-center
        justify-center
        transition-colors
        duration-300
      `}
    >
    </button>
  );
};

export default BlueButton;