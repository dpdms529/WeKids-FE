"use client";

import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import PasswordBottom from "@/src/ui/components/signup/PasswordBottom";
import { useEffect, useState } from "react";
import { useSignUpStore } from "@/src/stores/accountStore";

export default function Page() {
  const [isInput, setIsInput] = useState(Array(6).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);
  const { setPassword } = useSignUpStore();

  return (
    <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
      <PasswordTop
        isInput={isInput}
        pwd={pwd}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
        index={6}
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
