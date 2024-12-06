"use client";
import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation";
import { useTransactionStore } from "@/src/stores/transactionStore";
import { useState, useEffect } from "react";
import TransferResult from "@/src/ui/components/transfer/TransferResult";

const Page = () => {
  const { selectedAccount, transferAmount, clearTransferData } =
    useTransactionStore();
  const [transferData, setTransferData] = useState({
    sendUser: "",
    amount: 0,
    accountNumber: "",
    bankName: "우리",
    memo: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (selectedAccount) {
      setTransferData((prev) => ({
        ...prev,
        sendUser: selectedAccount.name,
        accountNumber: selectedAccount.accountNumber,
        amount: transferAmount,
        memo: "메모입력..",
      }));
    }
  }, [selectedAccount, transferAmount]);

  const completeTransfer = () => {
    clearTransferData();
    router.push(urlPath.HOME);
  };

  return (
    <TransferResult transferData={transferData} onComplete={completeTransfer} />
  );
};

export default Page;
