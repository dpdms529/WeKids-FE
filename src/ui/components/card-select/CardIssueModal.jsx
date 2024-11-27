import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation"; 
import PopupMessage from "@/src/ui/components/molecules/PopupMessage";

const CardIssueModal = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleConfirm = () => {
    // { TODO: 추후 자식 입장 페이지로 변경 }
    router.push(urlPath.HOME); 
    onClose(); 
  };

  return (
    <div>
      <PopupMessage
        isOpen={isOpen}
        title={
          <span className="text-center text-R-20 text-black">
            카드 발급 안내
          </span>
        }
        message={
          <span className="text-center text-R-14 text-black/60">
            이대로 발급할까요?
          </span>
        }
        buttonText="확인"
        onClose={onClose}
        onConfirm={handleConfirm}
        width="375px"
        height="208px"
      />
    </div>
  );
};

export default CardIssueModal;