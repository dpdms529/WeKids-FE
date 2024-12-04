import { urlPath } from "@/src/constants/common";
import CardDesignLayout from "@/src/ui/components/card/CardDesignLayout";
import ChoiceDesign from "@/src/ui/components/card/ChoiceDesign";

export default function Page() {
  return (
    <CardDesignLayout showBackButton={false}>
      <div className="mt-14">
        <ChoiceDesign
          title="카드 발급 완료!"
          subText=""
          buttonText="카드 비밀번호 등록하기"
          linkUrl={urlPath.PARENT_CARD_PASSWORD}
        />
      </div>
    </CardDesignLayout>
  );
}
