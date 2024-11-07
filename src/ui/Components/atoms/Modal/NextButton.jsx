'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "w-[400px]",
  height: "h-[61px]",
  text: "다음",
  bgColor: "bg-[#2483C5]",
  hoverColor: "hover:bg-[#1f6ea3]",
  textColor: "text-white",
  radius: "rounded-md",
  padding: "px-6 py-3"
};

const NextButton = ({ 
  onClick, 
  width = BUTTON_DEFAULT.width, 
  height = BUTTON_DEFAULT.height, 
  text = BUTTON_DEFAULT.text,
  bgColor = BUTTON_DEFAULT.bgColor,      
  hoverColor = BUTTON_DEFAULT.hoverColor,
  textColor = BUTTON_DEFAULT.textColor,    
  radius = BUTTON_DEFAULT.radius,          
  padding = BUTTON_DEFAULT.padding        
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${hoverColor}
        ${textColor}
        ${radius}
        ${padding}
        transition-colors
        duration-300
      `}
    >
      {text}
    </button>
  );
};

export default NextButton;