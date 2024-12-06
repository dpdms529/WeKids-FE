import { urlPath } from "@/src/constants/common";
import PopupMessage from "@/src/ui/components/molecules/PopupMessage";
import { useRouter } from "next/navigation";
import { useColorStore } from "@/src/stores/cardStore";

const CardIssueModal = ({ isOpen, onClose, onConfirm }) => {
  const router = useRouter();
  const setDesign = useColorStore((state) => state.setDesign);

  const handleConfirm = () => {
    const design = useColorStore.getState().design;
    setDesign(design);
    router.push(urlPath.CHILD_CARD_COMPLETE);
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
