"use client";
import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation";
import TransferComplete from "@/src/ui/components/transfer/TransferComplete";
import { useState } from "react";

const Page = () => {
  const [transferData, setTransferData] = useState({
    sendUser: "최윤정",
    amount: 10000,
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  });
  const router = useRouter();

//   useEffect(() => {
//     if (selectedMission) {
//       setTransferData((prev) => ({
//         ...prev,
//         sendUser: selectedMission.userName,
//         accountNumber: selectedMission.accountNumber,
//         amount: 10000, // 미션 금액이 10,000원으로 고정
//         memo: "미션 수행 완료",
//       }));
//     }
//   }, [selectedMission]);

  const completeTransfer = () => {
    router.push(urlPath.HOME) // API연결 후, 미션목록으로 가게 수정
  }

  return <TransferComplete 
    transferData={transferData} 
    onComplete={completeTransfer}
  />;
};

export default Page;