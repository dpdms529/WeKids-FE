import { useEffect, useState } from "react";

const InputDateBox = ({
  width = 313,
  height = 40, // 높이를 조정
  value = "",
  label = "💡미션 만료일",
  onChange,
}) => {
  const [dateValue, setDateValue] = useState(value);

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

  return (
    <div className="flex flex-col w-full mb-3" style={{ width }}>
      {label && (
        <label
          htmlFor="date-input"
          className="block text-R-14 font-medium text-black mb-2" // 라벨과 입력창 간격 추가
        >
          {label}
        </label>
      )}
      <div className="bg-blue-100 rounded-lg shadow-md">
        <input
          id="date-input"
          type="date"
          value={dateValue}
          onChange={handleChange}
          className="w-full h-full p-2 bg-blue-100 rounded-md text-R-12 text-black resize-none outline-none"
          style={{ height }} // 높이를 직접 지정
        />
      </div>
    </div>
  );
};

export default InputDateBox;
