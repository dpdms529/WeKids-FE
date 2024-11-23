"use client";

import Bottom from "@/src/ui/components/signup/SignUpFooter"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import toast, { Toaster } from "react-hot-toast";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import { FileTextIcon } from "@radix-ui/react-icons";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";


export default function Page() {
    
  const [name, setName] = useState("");
  const [residentfront, setResidentfront] = useState("");
  const [residentback, setResidentback] = useState("");
  const [topChecked, setTopChecked] = useState(false);
  const [bottomChecked, setBottomChecked] = useState(false);

  useEffect(() => {
    setTopChecked(name !== "" &&  residentfront.length == 6 && residentback.length == 7);
}, [name, residentfront, residentback, topChecked]);

  const notify = () => {
    toast("빈칸을 채워주세요!");
  };

  const handleFrontChange = (value) => {
    setResidentfront(value.slice(0, 6));
  };
  
  const handleBackChange = (value) => { 
    
    setResidentback(value.slice(0, 7));
     
  };
    
  

    return (
      <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
        <Toaster position="top-center" />   
        <div className="flex flex-col px-10 w-max-full pt-12 gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-start">
              특정 금융정보법에 따라<br/> 아이의 기본 정보가 필요해요
            </div>
            <div>
              <InputTextBox placeholder={"이름"} value={name} onChange={setName}/>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-max-full">
            <div className="flex flex-row items-start">
              자녀의 주민등록번호
            </div>
            <div className="flex flex-row w-full gap-2">
              <LimitedInputBox placeholder={"주민등록번호"}
              value={residentfront}
              text={residentfront}
              onChange={handleFrontChange} 
              security={false}
              className="w-full"
              maxLength={6}/>
              <div className="flex flex-col justify-center">-</div>
              <LimitedInputBox
                placeholder={""}
                value={residentback}
                text={residentback}
                onChange={handleBackChange}
                security={true}
                className="w-full p-3 border border-gray-300 rounded text-transparent tracking-widest 
                   [text-shadow:0_0_0_#000]"
              />
            </div>
            <div className="flex flex-col mt-3 gap-3">
              <div className="text-R-14 text-stone-300">000님이 000님의 <br /> 법정대리인이 맞는지 확인하기 위해 </div>
              <div>가족관계증명서와 <br /> 기본증명서를 발급할게요 </div>
              <div>
                <FileTextIcon className="w-20 h-20"/>
              </div>
              <CustomButton 
              rounded="true" 
              className="w-full mt-3">
              발급하기
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="px-10 mt-12 mb-1">아이의 계좌를 만들기 위해 <br /> OOO님의 동의가 필요해요</div>
        <Bottom setAllChecked={setBottomChecked}/>
        <div className="flex flex-col px-10 py-5 gap-6">
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