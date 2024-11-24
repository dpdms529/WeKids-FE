'use client'

import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import Script from "next/script";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {

  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");

  const notify = () => {
    toast("주소가 정상적으로 입력되었습니다!");
  };


  const searchPostCodeHandler = () => {
    const width = Math.round(window.innerWidth * 0.5);
    const height = Math.round(window.innerHeight * 0.5);
    new daum.Postcode({
      oncomplete: function (data) {
        setPostcode(data.zonecode);
        setAddress(data.address); // 우선 이것들만
        
      },
      onclose: function(state) {
        if(state === 'COMPLETE_CLOSE'){
            notify();
        }
      }
    }).open({
      popupTitle: "Wekids 우편번호 검색",
      left: (window.screen.width / 2) - (width / 2),
      top: (window.screen.height / 2) - (height / 2)
    });
  };

  

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden px-10 py-6">
      <Toaster position="top-center" />
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      />
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col items-center">배송지 선택하기</div>
          <div className="flex w-[196px] h-[312px] bg-red-100"></div>
        </div>
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col h-[130px]">
            <div>배송지를 입력해 주세요.</div>
            <CustomButton onClick={searchPostCodeHandler} size={"mediumLarge"} rounded={true}>
                우편번호
            </CustomButton>
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
