"use client";
import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import Digit4PasswordButton from "@/src/ui/components/signup/Digit4PasswordButton";
import { useState } from "react";
import { useCardStore } from "@/src/stores/cardStore";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

export default function Page() {
  const [isInput, setIsInput] = useState(Array(4).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);
  const router = useRouter();
  const { registerPassword } = useCardStore();

  const handleSubmit = () => {
    router.push(urlPath.PARENT_CARD_CONFIRM);
  };

  return (
    <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
      <PasswordTop
        isInput={isInput}
        pwd={pwd}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
        index={4}
      />
      <Digit4PasswordButton
        pwd={pwd}
        isInput={isInput}
        allow={allow}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
