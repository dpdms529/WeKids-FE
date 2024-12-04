'use client'
import React, { useEffect } from "react";
import { urlPath } from "@/src/constants/common";
import CardDisplay from "@/src/ui/components/card/CardDisplay";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";
import { useColorStore, useSensitiveDataStore } from "@/src/stores/cardStore";
import { useRegisterPassword } from "@/src/query/cardQuery";
import Link from "next/link";

const DesignChracterColor = {
  color: "PINK1",
  character: "HEARTSPRING",
};

const CardIssueCompleteNodelivery = () => {
  const { getChildId, getResidentRegistrationNumber, getCardPassword, getAccountPassword } = useSensitiveDataStore();
  const {childcharacter, childcolor} = useColorStore();
  const { mutate, isLoading } = useRegisterPassword();
  useEffect(() => {
    console.log(childcharacter, childcolor)
  }, [])

  useEffect(() => {
    // 요청을 자동으로 보냄
    mutate(
      {
        residentRegistrationNumber: "111111-1111111", // 상태에서 가져온 값
        password: "1111", // 상태에서 가져온 값
        childId: 1,
      },
      {
        onSuccess: () => {
          console.log("비밀번호 등록 성공!");
        },
        onError: (error) => {
          console.error("비밀번호 등록 실패:", error.message);
        },
      }
    );
  }, []); // 빈 의존성 배열로 마운트 시 한 번만 실행

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <CardDisplay
          selectedCharacter={childcharacter ? childcharacter : DesignChracterColor.character}
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
    </div>
  );
};

export default CardIssueCompleteNodelivery;
