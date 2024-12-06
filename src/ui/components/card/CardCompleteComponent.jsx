"use client";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import CardDisplay from "@/src/ui/components/card/CardDisplay";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { useColorStore, useSensitiveDataStore } from "@/src/stores/cardStore";
import { useEffect } from "react";
import Link from "next/link";

const DesignChracterColor = {
  color: "YELLOW",
  character: "HEARTSPRING",
};

export default function CardCompleteComponent() {
  const router = useRouter();
  const { childcharacter, childcolor } = useColorStore();
  const { clearData } = useSensitiveDataStore();
  useEffect(() => {
    console.log(childcharacter, childcolor);
  }, []);

  const clearAll = () => {
    clearData();
  };
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <CardDisplay
          selectedCharacter={
            childcharacter != ""
              ? childcharacter
              : DesignChracterColor.character
          }
          selectedColor={
            childcolor != "" ? childcolor : DesignChracterColor.color
          }
          buttonText="뒷면보기"
          message="카드 발급을 완료했습니다!"
        />
      </div>

      <div>
        <Link href={urlPath.HOME}>
          <CustomButton size={"large"} rounded={false} onClick={clearAll}>
            확인
          </CustomButton>
        </Link>
      </div>
    </>
  );
}
