import { urlPath } from "@/src/constants/common";
import CardDesignLayout from "@/src/ui/components/card/CardDesignLayout";
import ChoiceDesign from "@/src/ui/components/card/ChoiceDesign";

const Page = () => {
  
  return (
    <CardDesignLayout backUrl={urlPath.HOME}>
      <ChoiceDesign
        title="내가 선택한 디자인"
        subText="승인 대기중이에요."
        buttonText="동의 확인하기"
        linkUrl={urlPath.HOME}
      />
    </CardDesignLayout>
  );
};

export default Page;