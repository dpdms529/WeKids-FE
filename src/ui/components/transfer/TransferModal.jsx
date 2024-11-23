import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Modal from "@/src/ui/components/atoms/Modal";
import Profile from "@/src/ui/components/atoms/Profile";
import { useRouter } from "next/navigation";

const TransferModal = ({
  isModalOpen,
  modalHandler,
  selectedAccount,
  transferAmount,
}) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={isModalOpen}
      modalHandler={modalHandler}
      width="393px"
      height="47vh"
      translateY="0%"
      deletebutton={true}
    >
      <div className="flex flex-col items-center mt-4 p-8 ">
        <Profile />
        <p className="text-base mt-2">
          <span className="text-B-22">{selectedAccount.name}</span>님에게
          <span className="text-B-22">{transferAmount.toLocaleString()}원</span>
        </p>
        <p className="text-R-20 mt-1">이체하시겠습니까?</p>
        <p className="text-R-12 mt-5 text-gray-400">
          받는계좌 : 우리은행 {selectedAccount.account}
        </p>
      </div>
      <div className="flex space-x-3 mt-7">
        <CustomButton
          size="small"
          color="gray"
          rounded={true}
          onClick={modalHandler}
        >
          취소
        </CustomButton>
        <CustomButton
          size="medium"
          rounded={true}
          onClick={() => router.push(urlPath.DONE)}
        >
          이체하기
        </CustomButton>
      </div>
    </Modal>
  );
};

export default TransferModal;
