"use client";

import { assigndata } from "@/src/constants/assign";
import Assign from "@/src/ui/Components/signup/Assign";
import { CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Bottom({ setAllChecked, option = 3 }) {
  const [allCheck, setAllCheck] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    Array(assigndata.length).fill(false),
  );

  useEffect(() => {
    const items = checkedItems.slice(0, option);
    setAllChecked(items.every((isChecked) => isChecked));
    if (checkedItems.some((item) => item === false)) {
      setAllCheck(false);
    }
  }, [checkedItems]);

  useEffect(() => {
    allCheck ? setCheckedItems(Array(assigndata.length).fill(true)) : "";
  }, [allCheck]);

  const handleCheckboxChange = (index, isChecked) => {
    if (index == -1) {
      setAllCheck(!allCheck);
    } else {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = isChecked;
      setCheckedItems(newCheckedItems);
    }
  };

  return (
    <>
      <div className="px-10 py-4">
        <span className="text-R-14">약관동의</span>
        <div className="border-stone-300 border-2 h-68 rounded-lg mt-4">
          <div className="flex flex-col space-y-2 p-3 items-start">
            <div className="flex flex-row justify-between w-full">
              <div
                className={`flex flex-row ${allCheck ? "border-black" : "border-stone-300"} border bg-black/10 rounded cursor-pointer`}
                onClick={(isChecked) => handleCheckboxChange(-1, isChecked)}
              >
                {allCheck ? (
                  <CheckIcon className="text-black w-4 h-4" />
                ) : (
                  <CheckIcon className="text-neutral-400 w-4 h-4" />
                )}
              </div>

              <div
                className={`text-R-10 ml-5 flex-grow ${allCheck ? "text-black/80" : "text-neutral-400"}`}
              >
                전체 동의
              </div>
            </div>
          </div>
          {assigndata.map((text, idx) => (
            <Assign
              key={idx}
              text={text}
              isChecked={checkedItems[idx]}
              onChange={(isChecked) => handleCheckboxChange(idx, isChecked)}
              option={idx < option}
            />
          ))}
        </div>
      </div>
    </>
  );
}
