"use client";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import { useState } from "react";

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // 팝업 열림/닫힘 상태 관리

  const handleButtonClick = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div>
        {/* 팝업이 열려 있으면 PopupMessage 컴포넌트 렌더링 */}
        {isPopupOpen && (
          <PopupMessage
            title="팝업 제목"
            message="이것은 팝업 메시지입니다."
            buttonText="확인"
            onButtonClick={handleButtonClick} // 확인 버튼 클릭 시 실행할 함수
            onClose={handleButtonClick} // X 버튼 클릭 시 팝업을 닫는 함수
          />
        )}
      </div>
    </>
  );
};

export default Page;
