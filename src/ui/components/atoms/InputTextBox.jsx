import { useEffect, useState } from "react";

const InputTextBox = ({
  width = 313,
  height = 51,
  text = "",
  placeholder = "값을 입력해주세요",
  onPlaceholderChange,
  onChange,
}) => {
  const [value, setValue] = useState(text);
  const [isFocused, setIsFocused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setValue(text);
  }, [text]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsCompleted(value.length > 0);
  };

  useEffect(() => {
    if (onPlaceholderChange) {
      onPlaceholderChange(placeholder);
    }
  }, [placeholder, onPlaceholderChange]);

  const getInputClasses = () => {
    const baseClasses =
      "w-full h-full px-[18px] py-3 box-border text-sm transition-all duration-200 ease-in bg-white outline-none break-all whitespace-pre-wrap overflow-auto overflow-x-hidden overflow-y-hidden resize-none flex items-center justify-center leading-center";

    if (!value && !isFocused) {
      return `${baseClasses} border border-neutral-400 rounded-xl text-gray-400`;
    } else if (isFocused) {
      return `${baseClasses} border-2 border-black rounded-xl text-black shadow-lg -translate-y-0.5`;
    } else if (isCompleted) {
      return `${baseClasses} border border-black rounded-xl text-black`;
    }
  };

  return (
    <div
      className="relative transition-all duration-200"
      style={{ width, height }}
    >
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={getInputClasses()}
      />
    </div>
  );
};

export default InputTextBox;
