'use client'
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import Header from "@/src/ui/layout/Header";
import SignUpFooter from "@/src/ui/components/signup/SignUpFooter"
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

export default function Page() {
  const [allCheck, setAllChecked] = useState(false);
    return (
        <div className="flex flex-col bg-white h-screen overflow-y-auto scrollbar-hide w-full">
          <Header />
          <div className="flex flex-col w-full h-[423px] items-center px-12 pt-12">
            <div>
              계좌를 불러오기 위해서는 <br/>
              주민등록 번호가 필요해요!
            </div>
            <div className="flex flex-col gap-11 mt-11">
              <div className="flex flex-col gap-3">
                <div>주민번호</div>
                <InputTextBox />
              </div>
              <div className="flex flex-col gap-3">
                <div>주민번호 확인</div>
                <InputTextBox />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[487px]">
            <div className="flex flex-col my-12">
              <SignUpFooter setAllChecked={setAllChecked} />
            </div>
            <div className="flex h-[91px]">
              <CustomButton >
                확인
              </CustomButton>
            </div>
          </div>
          
        </div>
    );
}