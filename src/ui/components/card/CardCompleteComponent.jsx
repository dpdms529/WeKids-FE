"use client";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";import CardDisplay from "@/src/ui/components/card/CardDisplay";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { useColorStore } from "@/src/stores/cardStore";

const DesignChracterColor = {
    color: "YELLOW",
    character: "HEARTSPRING",
  };

export default function CardCompleteComponent() {
    const router = useRouter();
  const { childcharacter, childcolor } = useColorStore();
  useEffect(() => {
    console.log(childcharacter, childcolor);
  }, []);
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
        <CustomButton
          size={"large"}
          rounded={false}
          onClick={() => router.push(urlPath.HOME)}
        >
          확인
        </CustomButton>
      </div>
      </>
    );
}