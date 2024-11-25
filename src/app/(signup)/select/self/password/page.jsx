"use client";
import PasswordTop from "@/src/ui/Components/signup/PasswordTop";
import PasswordBottom from "@/src/ui/Components/signup/PasswordBottom";
import { useState } from "react";

export default function Page() {
  const [isInput, setIsInput] = useState(Array(6).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);

  return (
    <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
      <PasswordTop
        isInput={isInput}
        pwd={pwd}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
      />
      <PasswordBottom
        pwd={pwd}
        isInput={isInput}
        allow={allow}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
      />
    </div>
  );
}
