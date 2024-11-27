import { urlPath } from "@/src/constants/common";
import PopupMessage from "@/src/ui/components/molecules/PopupMessage";

const CardIssueModal = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleConfirm = () => {
    // { TODO: PARENT/CARD/COMPLETE 부모 동의 대기 뷰로 이동 }
    router.push(urlPath.PARENT_CARD_CONFIRM); 
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
        buttonText={<Link href={urlPath.CARD_CHILD_APPROVE}>확인</Link>}
        onClose={onClose}
        onConfirm={handleConfirm}
        width="375px"
        height="208px"
      />
    </div>
  );
};

export default CardIssueModal;