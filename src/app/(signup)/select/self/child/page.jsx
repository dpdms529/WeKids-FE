"use client";

import Top from "@/src/ui/Components/signup/Top"
import Bottom from "@/src/ui/Components/signup/Bottom"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import toast, { Toaster } from "react-hot-toast";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";


export default function Page() {
    const [topChecked, setTopChecked] = useState(false);
    const [bottomChecked, setBottomChecked] = useState(false);
    const router = useRouter();

    const notify = () => {
        toast('빈칸을 채워주세요!');
      };

    return (
      <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
        <Toaster position="top-center" />   
        <div className="flex flex-col px-10 w-full">
          <div className="flex flex-col">
            <span className="flex flex-row items-start">
              특정 금융정보법에 따라<br/> 아이의 기본 정보가 필요해요
            </span>
            <div>
              <InputTextBox />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="flex flex-row items-start">
              자녀의 주민등록번호
            </span>
            <div className="flex flex-row w-full gap-2">
              <InputTextBox />
              <span className="flex flex-col justify-center">-</span>
              <InputTextBox />
            </div>
          </div>
        </div>
        <div className="px-10">아이의 계좌를 만들기 위해 <br /> OOO님의 동의가 필요해요</div>
        <Bottom setAllChecked={setBottomChecked}/>
        <div className="flex flex-col px-10 py-5 gap-2">
          <CustomButton 
              rounded="true" 
              className={`w-full ${(topChecked == true && bottomChecked == true)  ? "bg-main02" : "bg-stone-300 hover:bg-stone-300"}`} 
              onClick={() => {
                  topChecked && bottomChecked ? router.push(urlPath.HOME) : notify()
              }}
          >
              다음
          </CustomButton>
          <CustomButton 
              rounded="true" 
              className={`w-full ${(topChecked == true && bottomChecked == true)  ? "bg-main02" : "bg-stone-300 hover:bg-stone-300"}`} 
              onClick={() => {
                  topChecked && bottomChecked ? router.push(urlPath.HOME) : notify()
              }}
          >
              닫기
          </CustomButton>
        </div>
      </div>
    );
}