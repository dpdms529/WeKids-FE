import { useState, useEffect } from "react";

const LimitedInputBox = ({
  value = "",
  maxLength = 7,
  placeholder = "값을 입력해주세요",
  onChange,
  security = false,
  width,
  height = 51,
  className
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "").slice(0, maxLength);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type={`${security ? "password" : "text" }`}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${className} tracking-wides`}
      style={{
        width: width || "100%",
        height,
        padding: "12px 18px",
        boxSizing: "border-box",
        fontSize: "14px",
        border: "1px solid #A3A3A3",
        borderRadius: "12px",
        outline: "none",
        backgroundColor: "white",
      }}
    />
  );
};

export default LimitedInputBox;
