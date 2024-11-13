"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/Components/atoms/InputTextBox";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import { useState } from "react";

const Page = () => {
  const [placeholderValue, setPlaceholderValue] = useState("값을 입력하세요");
  const [isPopupOpen, setIsPopupOpen] = useState(true); // 팝업 열림/닫힘 상태 관리
  const handlePlaceholderChange = (newPlaceholder) => {
    setPlaceholderValue(newPlaceholder);
  };
  const handleButtonClick = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl mb-4">Example Usage of CommonComponent</h1>
        <InputTextBox
          height={60}
          placeholder={placeholderValue}
          onPlaceholderChange={handlePlaceholderChange}
        />
      </div>

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

      {/* large */}
      <div>
        <div className="bg-white w-full flex flex-col items-center justify-center space-y-3 py-5 border-b-2 border-black">
          <div className="text-2xl">Large</div>
          <CustomButton>main</CustomButton>
          <CustomButton color="sub">sub</CustomButton>
          <CustomButton color="gray">gray</CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3 py-5 border-b-2 border-black">
          <div className="text-2xl">Large Opacity</div>
          <CustomButton color="black10">black10</CustomButton>
          <CustomButton color="black40">black40</CustomButton>
          <CustomButton color="black80">black80</CustomButton>
        </div>
      </div>

      {/* medium */}
      <div>
        <div className="bg-white w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Medium</div>
          <CustomButton size="medium">main</CustomButton>
          <CustomButton color="sub" size="medium">
            sub
          </CustomButton>
          <CustomButton color="gray" size="medium">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-black">
          <div className="text-md">Medium Opacity</div>
          <CustomButton color="black10" size="medium">
            black10
          </CustomButton>
          <CustomButton color="black40" size="medium">
            black40
          </CustomButton>
          <CustomButton color="black80" size="medium">
            black80
          </CustomButton>
        </div>
      </div>

      {/* medium rounded*/}
      <div>
        <div className="bg-white w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Medium Rounded</div>
          <CustomButton size="medium" rounded={true}>
            main
          </CustomButton>
          <CustomButton color="sub" size="medium" rounded={true}>
            sub
          </CustomButton>
          <CustomButton color="gray" size="medium" rounded={true}>
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-black">
          <div className="text-md">Medium Opacity Rounded</div>
          <CustomButton color="black10" size="medium" rounded={true}>
            black10
          </CustomButton>
          <CustomButton color="black40" size="medium" rounded={true}>
            black40
          </CustomButton>
          <CustomButton color="black80" size="medium" rounded={true}>
            black80
          </CustomButton>
        </div>
      </div>

      {/* small */}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Small Rounded</div>
          <CustomButton size="small">main</CustomButton>
          <CustomButton color="sub" size="small">
            sub
          </CustomButton>
          <CustomButton color="gray" size="small">
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-black">
          <div className="text-md">Small Opacity Rounded</div>
          <CustomButton color="black10" size="small">
            black10
          </CustomButton>
          <CustomButton color="black40" size="small">
            black40
          </CustomButton>
          <CustomButton color="black80" size="small">
            black80
          </CustomButton>
        </div>
      </div>

      {/* small rounded */}
      <div className="flex">
        <div className="bg-white w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-r-2 border-black">
          <div className="text-md">Small Rounded</div>
          <CustomButton size="small" rounded={true}>
            main
          </CustomButton>
          <CustomButton color="sub" size="small" rounded={true}>
            sub
          </CustomButton>
          <CustomButton color="gray" size="small" rounded={true}>
            gray
          </CustomButton>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3 p-5 border-b-2 border-black">
          <div className="text-md">Small Opacity</div>
          <CustomButton color="black10" size="small" rounded={true}>
            black10
          </CustomButton>
          <CustomButton color="black40" size="small" rounded={true}>
            black40
          </CustomButton>
          <CustomButton color="black80" size="small" rounded={true}>
            black80
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Page;
