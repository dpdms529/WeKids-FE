"use client";

import { urlPath } from "@/src/constants/common";
import CardDesignLayout from "@/src/ui/components/card/CardDesignLayout";
import ChoiceDesign from "@/src/ui/components/card/ChoiceDesign";
import { useColorStore } from "@/src/stores/cardStore";

const Page = () => {
  const design = useColorStore((state) => state.design);

  return (
    <CardDesignLayout backUrl={urlPath.HOME}>
      <ChoiceDesign
        title="내가 선택한 디자인"
        subText="승인 대기중이에요."
        buttonText="동의 확인하기"
        linkUrl={urlPath.HOME}
        design={design}
      />
    </CardDesignLayout>
  );
};

export default Page;
