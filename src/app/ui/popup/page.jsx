"use client";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import { useState } from "react";

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white">
      {isPopupOpen && (
        <PopupMessage
          isOpen={isPopupOpen}
          title="배송지 등록 완료"
          message="배송지 등록이 완료되었습니다."
          buttonText="확인"
          onButtonClick={handleClose}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Page;
