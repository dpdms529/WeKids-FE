"use client";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import { useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("값을 입력하세요."); // 상태 관리

  const handleInputChange = (newValue) => {
    setInputValue(newValue); // 값이 바뀔 때마다 상태 업데이트
  };

  return (
    <>
      <div>
        <InputTextBox
          value={inputValue} // 부모에서 관리하는 값
          onChange={handleInputChange} // 부모에서 관리하는 onChange 함수
        ></InputTextBox>
        <p>입력한 값: {inputValue}</p> {/* 입력한 값을 출력 */}
      </div>
    </>
  );
};
export default Page;
