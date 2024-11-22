'use client';
import React from 'react';

const RECTANGLE_DEFAULT = {
  width: "w-[400px]",
  height: "h-[60px]",
  bgColor: "bg-white",
  borderColor: "border-[#D1D5DB]"
};

const Rectangle = ({ 
  width = RECTANGLE_DEFAULT.width,
  height = RECTANGLE_DEFAULT.height,
  bgColor = RECTANGLE_DEFAULT.bgColor,
  borderColor = RECTANGLE_DEFAULT.borderColor,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${borderColor}
        border
        rounded-md
        shadow-sm
      `}
    />
  );
};

export default Rectangle;