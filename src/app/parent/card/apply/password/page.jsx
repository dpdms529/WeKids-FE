"use client";
import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import Digit4PasswordButton from "@/src/ui/components/signup/Digit4PasswordButton";
import { useState } from "react";
import { useSensitiveDataStore } from "@/src/stores/cardStore";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import { useRegisterPassword } from "@/src/query/cardQuery";

export default function Page() {
  const [isInput, setIsInput] = useState(Array(4).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);
  const router = useRouter();
  const { getChildId, getCardPassword, getResidentRegistrationNumber } =
    useSensitiveDataStore();
  const { mutate, isLoading } = useRegisterPassword();
  const handleSubmit = () => {
    if (allow) {
      mutate(
        {
          childId: getChildId(),
          residentRegistrationNumber: getResidentRegistrationNumber(), // 상태에서 가져온 값
          accountPassword: pwd, // 상태에서 가져온 값
          cardPassword: getCardPassword() ? getCardPassword() : "1234",
        },
        {
          onSuccess: () => {
            console.log("비밀번호 등록이 성공적으로 완료되었습니다.");
            router.push(urlPath.PARENT_CARD_CONFIRM);
          },
          onError: (error) => {
            console.error("비밀번호 등록 실패:", error.message);
          },
        },
      );
    }
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
