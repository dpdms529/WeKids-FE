"use client";
import InputTextBox from "@/src/ui/Components/atoms/InputTextBox";
import { useState } from "react";

const Page = () => {
  const [placeholderValue, setPlaceholderValue] = useState("값을 입력하세요");
  const handlePlaceholderChange = (newPlaceholder) => {
    setPlaceholderValue(newPlaceholder);
  };
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl mb-4">Example Usage of CommonComponent</h1>
        <InputTextBox
          placeholder={placeholderValue}
          onPlaceholderChange={handlePlaceholderChange}
        />
      </div>
    </>
  );
};
export default Page;
