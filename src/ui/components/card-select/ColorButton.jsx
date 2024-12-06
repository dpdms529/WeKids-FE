import React from "react";

const ColorButton = ({ colorClass, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 
        rounded-full 
        ${colorClass} 
        transition-all duration-200 ease-in-out
        hover:scale-110
        active:scale-95
        ${isSelected ? "ring-1 ring-black/40 ring-offset-2" : ""}
        cursor-pointer
      `}
    ></button>
  );
};

export default ColorButton;
