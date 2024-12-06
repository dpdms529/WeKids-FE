"use client";

import { urlPath } from "@/src/constants/common";
import { useUserTypeStore } from "@/src/stores/userStore";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ParentChildSelector from "@/src/ui/components/signup/ParentChildSelector";
import SelectorItem from "@/src/ui/components/signup/SelectorItem";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [selectedType, setSelectedType] = useState(null);
  const { setUserType } = useUserTypeStore();

  const handleConfirm = () => {
    if (selectedType) {
      setUserType(selectedType);
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-y-auto items-center px-10">
      <div className="my-20 py-2">
        <a className="text-B-28">부모인가요? 자녀인가요?</a>
      </div>
      <div className="w-full">
        <ParentChildSelector
          isSelected={selectedType === "PARENT"}
          onClick={() => setSelectedType("PARENT")}
        >
          <SelectorItem
            isSelected={selectedType === "PARENT"}
            text="부모입니다."
            description="자녀에게 용돈을 줄거에요."
          />
        </ParentChildSelector>

        <ParentChildSelector
          isSelected={selectedType === "CHILD"}
          onClick={() => setSelectedType("CHILD")}
        >
          <SelectorItem
            isSelected={selectedType === "CHILD"}
            text="자녀입니다."
            description="용돈을 받고 금융도 배울거에요."
          />
        </ParentChildSelector>
      </div>
      <div className="fixed bottom-5">
        <Link href={urlPath.SIGNUP_REGFOM} onClick={handleConfirm}>
          <CustomButton
            className={`${selectedType ? "bg-main01" : "bg-neutral-400 hover:bg-neutral-400 cursor-default"}`}
          >
            확인
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
