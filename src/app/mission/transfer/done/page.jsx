"use client";
import { urlPath } from "@/src/constants/common";
import TransferComplete from "@/src/ui/components/transfer/TransferComplete";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [transferData, setTransferData] = useState({
    sendUser: "최윤정",
    amount: 10000,
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  });

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

  return ( // 미션 목록으로 이동하게 변경
    <Link href={urlPath.HOME}> 
      <TransferComplete 
        transferData={transferData}
      />
    </Link>
  );
};

export default Page;