"use client";
import { urlPath } from "@/src/constants/common";
import { useTransactionStore } from "@/src/stores/transactionStore";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import KeyPad from "@/src/ui/components/atoms/KeyPad";
import TransferAmountDisplay from "@/src/ui/components/transfer/TransferAmoutDisplay";
import TransferModal from "@/src/ui/components/transfer/TransferModal";
import TransferOptions from "@/src/ui/components/transfer/TransferOptions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // toast를 사용하여 알림 띄우기

const dummyData = [
  { id: 1, name: "구자빈", account: "111-111-111", bank: "우리은행", imgPath: "/images/gogopingImg.svg" },
  { id: 2, name: "강현우", account: "222-222-222", bank: "우리은행" , imgPath: "/images/gogopingImg.svg"},
  { id: 3, name: "안찬웅", account: "333-333-333", bank: "우리은행" , imgPath: "/images/gogopingImg.svg"},
  { id: 4, name: "조예은", account: "444-444-444", bank: "우리은행" , imgPath: "/images/gogopingImg.svg"},
  { id: 5, name: "최윤정", account: "555-555-555", bank: "우리은행" , imgPath: "/images/gogopingImg.svg"},
];

const sendUser = {
  name: "김우리",
  account: "666-666-666",
  balance: 50000000,
  bank: "우리은행",
  imgPath: "/images/gogopingImg.svg"
};

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

  // 0원 이하일 경우 버튼 비활성화
  const isButtonDisabled = transferAmount <= 0;

  const handleButtonClick = () => {
    if (isButtonDisabled) {
      // Todo 이거 안뜸.. 왜인지는 알겠는데 못고쳐..!
      toast.error("0원은 입력할 수 없습니다.");
    } else {
      // transferAmount가 0 이상일 경우, modal을 열거나 다른 동작 수행
      openModal();
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white mt-5">
      <TransferAmountDisplay
        selectedAccount={selectedAccount}
        transferAmount={transferAmount}
        clearTransferData={clearTransferData}
        sendUser={sendUser}
        isShaking={isShaking}
        handleUserChange={handleUserChange}
      />
      <div className="bottom-0 fixed">
        <TransferOptions
          handleAddAmount={handleAddAmount}
          handleSetMaxAmount={handleSetMaxAmount}
        />
        <div className="w-[393px] mt-9">
          <KeyPad
            number={handleNumberClick}
            buttonHeight="h-14"
            buttonWidth="w-[393px]"
          />
        </div>
        <CustomButton
          onClick={handleButtonClick}
          // 버튼 비활성화 및 호버 효과 제거
          className={`${isButtonDisabled ? "bg-stone-300 cursor-not-allowed pointer-events-none" : ""}`}
        >
          다음
        </CustomButton>
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
