"use client";
import React, { useEffect } from "react";
import { urlPath } from "@/src/constants/common";
import CardDisplay from "@/src/ui/components/card/CardDisplay";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Link from "next/link";
import { useColorStore, useSensitiveDataStore } from "@/src/stores/cardStore";
import { useRegisterPassword } from "@/src/query/cardQuery";
const DesignChracterColor = {
  color: "PINK1",
  character: "HEARTSPRING",
};

export default function DeliveryComponent() {
  const {
    getChildId,
    getResidentRegistrationNumber,
    getCardPassword,
    getAccountPassword,
  } = useSensitiveDataStore();
  const { mutate, isLoading } = useRegisterPassword();
  const { childcharacter, childcolor } = useColorStore();
  useEffect(() => {
    mutate(
      {
        childId: getChildId(),
        residentRegistrationNumber: getResidentRegistrationNumber(), // 상태에서 가져온 값
        accountPassword: getAccountPassword(), // 상태에서 가져온 값
        cardPassword: getCardPassword() ? getCardPassword() : "1234",
      },
      {
        onSuccess: () => {
          console.log("비밀번호 등록이 성공적으로 완료되었습니다.");
        },
        onError: (error) => {
          console.error("비밀번호 등록 실패:", error.message);
        },
      },
    );
  }, []);

  useEffect(() => {
    console.log(childcharacter, childcolor);
  }, []);
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <CardDisplay
          selectedCharacter={
            childcharacter ? childcharacter : DesignChracterColor.character
          }
          selectedColor={childcolor ? childcolor : DesignChracterColor.color}
          buttonText="뒷면보기"
          message="카드 발급을 완료했습니다!"
        />
      </div>
      <Link href={urlPath.PARENT_CARD_DELIVERY}>
        <div>
          <CustomButton size={"large"} rounded={false}>
            배송지 등록하러가기
          </CustomButton>
        </div>
      </Link>
    </>
  );
}
