"use client";

import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Assign({ text, isChecked, onChange, option }) {
  const [checked, setChecked] = useState(isChecked);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  const OpenCheckBox = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-2 p-3 items-start">
      <div className="flex flex-row justify-between w-full">
        <div
          className={`flex flex-row ${checked ? "border-black" : "border-stone-300"} border bg-black/10 rounded cursor-pointer`}
          onClick={handleCheckboxChange}
        >
          {checked ? (
            <CheckIcon className="text-black w-4 h-4" />
          ) : (
            <CheckIcon className="text-neutral-400 w-4 h-4" />
          )}
        </div>
        <div
          className={`text-R-10 ml-5 flex-grow ${checked ? "text-black/80" : "text-neutral-400"}`}
        >
          {text.title}
        </div>
        <ChevronDownIcon className="text-rignt" onClick={OpenCheckBox} />
      </div>
      {isOpen && (
        <a className="mx-7 px-2 text-R-10 text-neutral-400">{text.content} </a>
      )}
    </div>
  );
}
