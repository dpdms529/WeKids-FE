import { urlPath } from "@/src/constants/common";
import { submitTransfer } from "@/src/services/transaction";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Modal from "@/src/ui/components/atoms/Modal";
import Profile from "@/src/ui/components/atoms/Profile";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const TransferModal = ({
  isModalOpen,
  modalHandler,
  selectedAccount,
  transferAmount,
  sendUser,
}) => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: submitTransfer,
  });

  const handleSubmit = () => {
    const data = {
      parentAccountNumber: sendUser.accountNumber,
      childAccountNumber: selectedAccount.accountNumber,
      amount: transferAmount,
      sender: sendUser.name,
      receiver: selectedAccount.name,
    };

    mutation.mutate(data, {
      onSuccess: () => {
        alert("이체가 성공적으로 완료되었습니다!");
        router.push(urlPath.DONE);
      },
      onError: (error) => {
        alert("이체 실패: " + error.message);
      },
    });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      modalHandler={modalHandler}
      width="393px"
      height="47vh"
      deletebutton={true}
    >
      <div className="flex flex-col items-center mt-4 p-8">
        <Profile />
        <p className="text-base mt-2">
          <span className="text-B-22">{selectedAccount.name}</span>님에게
          <span className="text-B-22">{transferAmount.toLocaleString()}원</span>
        </p>
        <p className="text-R-20 mt-1">이체하시겠습니까?</p>
        <p className="text-R-12 mt-5 text-gray-400">
          받는계좌 : 우리은행 {selectedAccount.accountNumber}
        </p>
      </div>
      <div className="flex flex-row w-[393px] space-x-3 mt-7 px-8 pb-2">
        <CustomButton size="small" color="gray" rounded={true} onClick={modalHandler}>
          취소
        </CustomButton>
        <CustomButton size="medium" rounded={true} onClick={handleSubmit}>
          이체하기
        </CustomButton>
      </div>
    </Modal>
  );
};


export default TransferModal;
