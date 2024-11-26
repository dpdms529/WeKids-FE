import React, { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const BirthButton = ({
  width = 313,
  height = 51,
  options = [],
  placeholder = "선택해주세요",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsFocused(true);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
    setIsFocused(false);
    if (onChange) onChange(option);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative w-full h-${height} ${width} transition-all duration-200 ease-in-out`} // 혹시나 너비 바꿀 일 있을수도 있어서
      tabIndex={0}
      onBlur={handleBlur}
    >
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full h-full pl-4 pr-1 py-3 bg-white text-sm border border-neutral-400 rounded-lg 
    ${
      isFocused
        ? "outline outline-1 outline-black shadow-md transform -translate-y-0.5"
        : "outline-none"
    } transition-all cursor-pointer`}
      >
        <span className={selectedValue ? "text-black" : "text-stone-300"}>
          {selectedValue || placeholder}
        </span>
        <ChevronDownIcon className="w-5 h-5 text-black" />
      </div>
      {isOpen && (
        <div
          className={`absolute left-0 w-full mt-2 bg-white border border-neutral-400 rounded-lg shadow-lg max-h-52 overflow-y-auto z-10`}
          style={{ top: "100%" }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 text-sm transition-colors cursor-pointer hover:bg-stone-300"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthButton;
