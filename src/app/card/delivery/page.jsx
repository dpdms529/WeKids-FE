'use client'

import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";

export default function Page() {
  

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden px-10 py-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col items-center">배송지 선택하기</div>
          <div className="flex w-[196px] h-[312px] bg-red-100"></div>
        </div>
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col h-[130px]">
            <div>배송지를 입력해 주세요.</div>
            <div className="flex flex-col w-full h-[50px] bg-blue-100"></div>
          </div>
          <div className="flex flex-col h-[130px]">
            <div>받는 분 이름을 입력해 주세요.</div>
            <InputTextBox />
          </div>
          <div className="flex flex-col h-[130px]">
            <div>연락처를 입력해 주세요.</div>
            <InputTextBox />
          </div>
          <div className="flex flex-col items-center h-[102px]"> 
            <CustomButton size={"mediumLarge"} rounded={true}>
                휴대폰 인증하기
            </CustomButton>
          </div>
        </div>
      </div>  
    </div>
  );
}
