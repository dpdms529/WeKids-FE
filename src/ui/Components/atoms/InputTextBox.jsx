"use client";
import { useEffect, useState } from "react";

const InputTextBox = ({
  width = 313,
  height = 51,
  placeholder = "값을 입력하세요",
  onPlaceholderChange,
  radius = 12, // default value for radius
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // placeholder 값이 변경될 때마다 부모에게 전달
  useEffect(() => {
    if (onPlaceholderChange) {
      onPlaceholderChange(placeholder);
    }
  }, [placeholder, onPlaceholderChange]); // placeholder 값이 변경될 때마다 실행

  const borderColor = isFocused || value ? "black" : "gray"; // 입력 값에 따라 border 색상 변경
  const textColor = value ? "black" : "gray"; // 값에 따라 텍스트 색상 변경
  const boxShadow = isFocused ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none"; // 포커스 시 그림자

  return (
    <div style={{ width, height }}>
      <input
        className="text-R-14"
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "100%",
          border: `2px solid ${borderColor}`,
          borderRadius: `${radius}px`, // radius 값 적용
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 12,
          boxSizing: "border-box",
          color: textColor,
          boxShadow: boxShadow,
        }}
      />
    </div>
  );
};

export default InputTextBox;
