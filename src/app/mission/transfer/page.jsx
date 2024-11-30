"use client";
import { urlPath } from "@/src/constants/common";
import TransferComplete from "@/src/ui/components/transfer/TransferComplete";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [transferData, setTransferData] = useState({
    sendUser: "xx",
    amount: "xx",
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  });

  return (
    <Link href={urlPath.MISSION_TRANSFER_PASSWORD}>
      <TransferComplete
        transferData={transferData}
        type="CONFIRM"
      />
    </Link>
  );
};

export default Page;