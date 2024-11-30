"use client";
import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation";
import TransferComplete from "@/src/ui/components/transfer/TransferComplete";
import { useState } from "react";

const Page = () => {
  const [transferData, setTransferData] = useState({
    sendUser: "xx",
    amount: "xx",
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  });
  const router = useRouter();

  const completeTransfer = () => {
    router.push(urlPath.HOME) // 송금 비밀번호 등록 page로 이동
  }

  return <TransferComplete 
    transferData={transferData} 
    onComplete={completeTransfer}
    type="CONFIRM"
  />;
};

export default Page;