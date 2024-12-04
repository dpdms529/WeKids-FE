"use client";
import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import PasswordBottom from "@/src/ui/components/signup/PasswordBottom";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

export default function TransferPasswordPage() {
    const [isInput, setIsInput] = useState(Array(6).fill(false));
    const [pwd, setPwd] = useState("");
    const [allow, setAllowed] = useState(false);
    const router = useRouter();

    // 비밀번호 6자리 입력되면 바로 다음 페이지로 이동
    useEffect(() => {
      if (isInput.every(input => input === true)) {
        router.push(urlPath.MISSION_TRANSFER_DONE);
      }
    }, [isInput]);

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
          <PasswordBottom
            pwd={pwd}
            isInput={isInput}
            allow={allow}
            setIsInput={setIsInput}
            setPwd={setPwd}
            setAllowed={setAllowed}
            type="transfer"
          />
        </div>
    );
}