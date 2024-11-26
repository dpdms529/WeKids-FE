"use client";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import React from "react";
import CardDisplay from "@/src/ui/components/card/CardDisplay";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";

const DesignChracterColor = {
  color: "YELLOW",
  character: "HEARTSPRING",
};

const CardIssueComplete = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <CardDisplay
          selectedCharacter={DesignChracterColor.character}
          selectedColor={DesignChracterColor.color}
          buttonText="뒷면보기"
          message="카드 발급을 완료했습니다!"
        />
      </div>

      <div>
        <CustomButton
          size={"large"}
          rounded={false}
          onClick={() => router.push(urlPath.HOME)}
        >
          확인
        </CustomButton>
      </div>
    </div>
  );
};

export default CardIssueComplete;
