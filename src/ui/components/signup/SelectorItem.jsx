import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";

export default function SelectorItem({ isSelected, description, text }) {
  return (
    <>
      <div className="w-1/3 h-20 flex items-center justify-center">
        <div
          className={`rounded-full w-10 h-10 ${isSelected ? "bg-main01" : "bg-neutral-400"}`}
        >
          <CheckIcon
            className={`w-10 h-10 ${isSelected ? "text-black" : "text-white"} `}
          />
        </div>
      </div>
      <div
        className={`w-2/3 h-20 flex flex-col gap-2 justify-center ${isSelected ? "text-black" : "text-neutral-400"}`}
      >
        <p className="text-R-12">{description}</p>
        <p className="text-R-20">{text}</p>
      </div>
    </>
  );
}
