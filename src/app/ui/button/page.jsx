"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/Components/atoms/InputTextBox";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import { useState } from "react";

const Page = () => {
  const [placeholderValue, setPlaceholderValue] = useState("값을 입력하세요");
  const handlePlaceholderChange = (newPlaceholder) => {
    setPlaceholderValue(newPlaceholder);
  };
  const handleButtonClick = () => {
    // 버튼 클릭 시 실행되는 함수 구현
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
        <PopupMessage
          title="메시지 등록 완료"
          message="메시지 등록이 완료되었습니다."
          buttonText="확인"
          onButtonClick={handleButtonClick}
          height="208px"
        />
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
