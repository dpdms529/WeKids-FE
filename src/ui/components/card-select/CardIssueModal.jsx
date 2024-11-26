import { urlPath } from "@/src/constants/common";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import Link from "next/link";

const CardIssueModal = ({ isOpen, onClose }) => {
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
        buttonText={<Link href={urlPath.CARD_PARENT_APPROVE}>확인</Link>}
        onClose={onClose}
        width="375px"
        height="208px"
      />
    </div>
  );
};

export default CardIssueModal;
