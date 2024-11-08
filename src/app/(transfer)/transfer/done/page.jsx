"use client";
import React, { useState } from "react";
import ShareButton from "@/src/ui/components/atoms/ShareButton";
import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Page = () => {
  const [transferData, setTransferData] = useState({
    receiverName: "최윤정",
    amount: 10000,
    accountNumber: "240910713624017",
    bankName: "하나",
    memo: "메모입력..",
  });
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* 노란색 체크 원 */}
        <div className="w-[60px] h-[60px] rounded-full bg-main02 flex items-center justify-center mb-6">
          <CheckIcon className="w-[42px] h-[42px]" />
        </div>

        {/* 텍스트 영역 */}
        <div className="text-center space-y-2 mb-4">
          <p className="text-[16px]">{transferData.receiverName}님에게</p>
          <p className="text-[24px] font-bold text-black">
            {transferData.amount.toLocaleString()}원 보냈어요
          </p>
          <div className="flex items-center justify-center gap-1 text-[14px] text-[#666666]">
            {transferData.bankName} {transferData.accountNumber}
            <ChevronRightIcon width="16" height="16" stroke="#666666" strokeWidth={0.5} />
          </div>
        </div>

        {/* 메모 영역 */}
        <div className="bg-[#F5F5F5] px-4 py-2 rounded-full text-[14px] text-[#666666]">
          {transferData.memo}
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="px-5 pb-8">
        <div className="flex gap-2">
          <ShareButton rounded={true} />
          <CustomButton rounded={true} onClick={() => router.push(urlPath.HOME)}>
            확인
          </CustomButton>
        </div>
      </div>
    </main>
  );
};

export default Page;
