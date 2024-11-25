import React from 'react';
import PopupMessage from '@/src/ui/Components/molecules/PopupMessage';

const CardIssueModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <PopupMessage
        isOpen={isOpen}
        title={<span className="text-center text-R-20 text-black">카드 발급 안내</span>}
        message={<span className="text-center text-R-14 text-black/60">이대로 발급할까요?</span>}
        buttonText="확인"
        onClose={onClose}
        width="375px"
        height="208px"
      />
    </div>
  );
};

export default CardIssueModal;