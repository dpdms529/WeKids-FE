"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import KeyPad from "@/src/ui/components/atoms/KeyPad";
import { useTransactionStore } from "@/src/stores/transactionStore";
import TransferAmountDisplay from "@/src/ui/components/transfer/TransferAmoutDisplay";
import TransferOptions from "@/src/ui/components/transfer/TransferOptions";
import TransferModal from "@/src/ui/components/transfer/TransferModal";
import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

const dummyData = [
  { id: 1, name: "구자빈", account: "111-111-111", bank: "우리은행" },
  { id: 2, name: "강현우", account: "222-222-222", bank: "우리은행" },
  { id: 3, name: "안찬웅", account: "333-333-333", bank: "우리은행" },
  { id: 4, name: "조예은", account: "444-444-444", bank: "우리은행" },
  { id: 5, name: "최윤정", account: "555-555-555", bank: "우리은행" }, // 추후에는 더미데이터를 없애고 id 계좌 정보를 백엔드에서 조회해 오고 출력
];

const sendUser = { name: "김우리", account: "666-666-666", balance: 50000000, bank: "우리은행" };

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const {
    selectedAccount,
    setSelectedAccount,
    transferAmount,
    setTransferAmount,
    clearTransferData,
  } = useTransactionStore();

  useEffect(() => {
    if (isShaking) {
      const timeout = setTimeout(() => {
        setIsShaking(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isShaking]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNumberClick = (num) => {
    if (num === "⌫") {
      const newAmount = transferAmount.toString().slice(0, -1);
      setTransferAmount(newAmount === "" ? 0 : parseInt(newAmount, 10));
    } else {
      const newTotal = parseInt(transferAmount.toString() + num, 10);
      if (newTotal > sendUser.balance) {
        setTransferAmount(sendUser.balance);
        setIsShaking(true);
      } else {
        setTransferAmount(newTotal);
      }
    }
  };

  const handleSetMaxAmount = () => {
    setTransferAmount(sendUser.balance);
  };

  const handleAddAmount = (increment) => {
    const newTotal = transferAmount + increment;
    if (newTotal > sendUser.balance) {
      setTransferAmount(sendUser.balance);
      setIsShaking(true);
    } else {
      setTransferAmount(newTotal);
    }
  };

  if (!selectedAccount) redirect(urlPath.ACCOUNT_LIST);

  const handleUserChange = (e) => {
    const selectedName = e.target.value;
    const user = dummyData.find((user) => user.name === selectedName); // dummyData
    if (user) {
      setSelectedAccount(user);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <TransferAmountDisplay
        selectedAccount={selectedAccount}
        transferAmount={transferAmount}
        clearTransferData={clearTransferData}
        sendUser={sendUser}
        isShaking={isShaking}
        handleUserChange={(e) => handleUserChange(e)}
      />
      <div className="bottom-0 fixed">
        <TransferOptions
          handleAddAmount={handleAddAmount}
          handleSetMaxAmount={handleSetMaxAmount}
        />
        <div className="w-[393px] mt-9">
          <KeyPad number={handleNumberClick} buttonHeight="h-14" buttonWidth="w-[393px]" />
        </div>
        <CustomButton onClick={openModal}>다음</CustomButton>
      </div>
      <TransferModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedAccount={selectedAccount}
        transferAmount={transferAmount}
      />
    </div>
  );
}
