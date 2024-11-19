import React from "react";
import Modal from "@/src/ui/components/atoms/Modal";
import Profile from "@/src/ui/components/atoms/Profile";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

const TransferModal = ({ isModalOpen, closeModal, selectedAccount, transferAmount }) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      width="393px"
      height="47vh"
      delete_button={true}
    >
      <div className="flex flex-col items-center mt-4 p-8 ">
        <Profile />
        <p className="text-base mt-2">
          <span className="text-B-22">{selectedAccount.name}</span>님에게
          <span className="text-B-22">{transferAmount.toLocaleString()}원</span>
        </p>
        <p className="text-R-20 mt-1">이체하시겠습니까?</p>
        <p className="text-R-12 mt-5 text-gray-400">받는계좌 : 우리은행 {selectedAccount.account}</p>
      </div>
      <div className="flex flex-row space-x-2 mt-2 p-4 max-w-[393px]">
        <CustomButton size="small" color="gray" rounded={true} onClick={closeModal}>
          취소
        </CustomButton>
        <CustomButton size="medium" rounded={true} onClick={() => router.push(urlPath.DONE)}>
          이체하기
        </CustomButton>
      </div>
    </Modal>
  );
};

export default TransferModal;
