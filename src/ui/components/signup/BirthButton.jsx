import React, { useState } from "react";

const CustomSelectBox = ({
  width = 313,
  height = 51,
  options = [],
  placeholder = "선택해주세요",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태
  const [selectedValue, setSelectedValue] = useState(""); // 선택된 값
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태

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
    setIsOpen(false); // 포커스가 사라지면 드롭다운 닫기
  };

  const getStyles = () => {
    const baseStyles = {
      width: "100%",
      height: "100%",
      padding: "12px 18px",
      boxSizing: "border-box",
      fontSize: 14,
      transition: "all 0.2s ease-in",
      backgroundColor: "white",
      outline: "none",
      border: "1px solid #A3A3A3",
      borderRadius: "12px",
      color: selectedValue ? "#000000" : "#9FA6B2", // 선택 여부에 따라 색상 변경
      cursor: "pointer",
    };

    if (isFocused) {
      return {
        ...baseStyles,
        border: "2px solid #000000", // 포커스 상태에서 두꺼운 테두리
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
      };
    }

    return baseStyles;
  };

  const containerStyles = {
    width,
    height,
    position: "relative",
    cursor: "pointer",
  };

  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    border: "1px solid #A3A3A3",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    marginTop: "8px",
    zIndex: 1000,
  };

  const optionStyles = {
    padding: "12px 18px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  };

  return (
    <div
      style={containerStyles}
      tabIndex={0} // div가 포커스를 받을 수 있도록 설정
      onBlur={handleBlur} // 포커스가 사라지면 호출
    >
      <div
        onClick={toggleDropdown}
        style={getStyles()}
      >
        {selectedValue || placeholder}
      </div>
      {isOpen && (
        <div style={dropdownStyles}>
          {options.map((option, index) => (
            <div
              key={index}
              style={optionStyles}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#F0F0F0")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "white")
              }
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

export default CustomSelectBox;
