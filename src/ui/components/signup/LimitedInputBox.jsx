import { useState, useEffect } from "react";

const LimitedInputBox = ({
  value = "",
  maxLength = 7,
  placeholder = "값을 입력해주세요",
  onChange,
  width,
  height = 51,
  className
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    console.log(newValue);
    if (newValue.length <= maxLength) {
      setInputValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
    else{
      e.target.value = inputValue;
    }
  };

  const getStyles = () => ({
    width: width,
    height: height,
    padding: "12px 18px",
    boxSizing: "border-box",
    fontSize: 14,
    border: "1px solid #A3A3A3",
    borderRadius: "12px",
    outline: "none",
    backgroundColor: "white",
    transition: "all 0.2s ease-in",
  });

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={getStyles()}
      className={`${className}`}
    />
  );
};

export default LimitedInputBox;