import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ShareButton from "@/src/ui/components/atoms/Sharebutton";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const TransferComplete = ({ 
    onComplete,
    transferData = {
      sendUser: "",
      amount: 0,
      accountNumber: "",
      bankName: "우리",
      memo: "",
    }
  }) => {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-main02 flex items-center justify-center mb-6">
            <CheckIcon className="w-[42px] h-[42px]" />
          </div>
  
          <div className="text-center space-y-2 mb-4">
            <p className="text-B-28 text-black/80">
              {transferData.sendUser || "알 수 없는 사용자"}님에게
            </p>
            <p className="text-B-28 text-black/80">
              {transferData.amount?.toLocaleString() || 0}원 보냈어요
            </p>
            <div className="flex items-center justify-center text-R-14 text-neutral-300 pt-4">
              {transferData.bankName} {transferData.accountNumber}
              <ChevronRightIcon
                width="16"
                height="16"
                stroke="text-neutral-300"
                strokeWidth={0.5}
              />
            </div>
          </div>
        </div>
  
        <div className="px-5 pb-8">
          <div className="flex gap-2">
            <ShareButton rounded={true} />
            <CustomButton
              rounded={true}
              onClick={onComplete}
            >
              <span className="text-R-20">확인</span>
            </CustomButton>
          </div>
        </div>
      </main>
    );
  };
  
  export default TransferComplete;