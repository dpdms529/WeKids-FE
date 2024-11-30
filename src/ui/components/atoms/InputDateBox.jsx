import { useEffect, useState } from "react";

const InputDateBox = ({
  width = 313,
  height = 71,
  value = "",
  label = "💡미션 만료일",
  onChange,
}) => {
  const [dateValue, setDateValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setDateValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setDateValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getInputClasses = () => {
    const baseClasses =
      "w-full h-full px-4 py-2 box-border text-sm transition-all duration-200 ease-in bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500";

    if (!dateValue && !isFocused) {
      return `${baseClasses} text-gray-400`;
    } else if (isFocused) {
      return `${baseClasses} text-black border-black shadow-lg`;
    } else {
      return `${baseClasses} text-black`;
    }
  };

  return (
    <div className="flex flex-col w-full" style={{ width, height }}>
      {label && (
        <label
          htmlFor="date-input"
          className="block text-R-14 font-medium text-black mb-1"
        >
          {label}
        </label>
      )}
      <input
        id="date-input"
        type="date"
        value={dateValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={getInputClasses()}
        style={{ appearance: "auto" }} // 기본 아이콘 표시
      />
    </div>
  );
};

export default InputDateBox;
