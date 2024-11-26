import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ChoiceDesign from "@/src/ui/components/card/ChoiceDesign";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden bg-sub02">
      <div className="flex flex-col p-4 h-full justify-center items-center gap-12">
        <ChoiceDesign text="카드 발급 완료!" />
        <Link href={urlPath.PARENT_CARD_PASSWORD}>
          <CustomButton size="mediumLarge" rounded={true} className="text-R-20">
            카드 비밀번호 등록하기
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}
