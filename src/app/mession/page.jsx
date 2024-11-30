"use client";
import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import Digit4PasswordButton from "@/src/ui/components/signup/Digit4PasswordButton";
import { useState } from "react";

export default function TransferPasswordPage() {
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
            index={6}
            title="송금 비밀번호를"
            type="송금"
          />
          <Digit4PasswordButton
            pwd={pwd}
            isInput={isInput}
            allow={allow}
            setIsInput={setIsInput}
            setPwd={setPwd}
            setAllowed={setAllowed}
            type="transfer" // 송금 비밀번호 타입 지정
          />
        </div>
      );
    }