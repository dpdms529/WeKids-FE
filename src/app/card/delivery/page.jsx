'use client'

import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import Script from "next/script";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "@/src/ui/components/atoms/Modal";
import { PlusIcon } from '@radix-ui/react-icons';

export default function Page() {

  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isExistCode, setExistCode] = useState(false);
  const notify = () => {
    toast(
      <div>
        주소가 입력되지 않았습니다. <br /> 다시 입력해주세요.
      </div>
    );
  };


  const searchPostCodeHandler = () => {
    const width = Math.round(window.innerWidth * 0.5);
    const height = Math.round(window.innerHeight * 0.5);
    new daum.Postcode({
      oncomplete: function (data) {
        setPostcode(data.zonecode);
        setAddress(data.address); // 우선 이것들만
        setIsOpen(true);
        setExistCode(true);
        
      },
    }).open({
      popupTitle: "Wekids 우편번호 검색",
      left: (window.screen.width / 2) - (width / 2),
      top: (window.screen.height / 2) - (height / 2)
    });
  };

  const modalHandler = () =>{
    setIsOpen(!isOpen);
  }

  

  return (
    <div className="flex flex-col h-screen max-w-full overflow-auto scrollbar-hide px-10 py-6">
      <Toaster position="top-center" />
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      />
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col items-center text-R-20 text-black/80">배송지 선택하기</div>
          <div className="flex w-[196px] h-[312px] bg-red-100 mt-6"></div>
        </div>
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col h-[130px]">
            <div className="mb-3">배송지를 입력해 주세요.</div>
            <CustomButton onClick={searchPostCodeHandler} size={"mediumLarge"} rounded={true} className="bg-white text-black/80 border border-1 border-black/80 hover:bg-white">
    
              <div className="flex flex-col text-black/80 text-R-14">{isExistCode ? address 
              : 
              (<div className="flex flex-col items-center gap-1">
                <PlusIcon className="w-[20px] h-[20px]"/>
                <span className="text-R-12 text-black/80">주소찾기</span>
              </div>
              )}</div> 
                
            </CustomButton>
          <Modal isOpen={isOpen}
            modalHandler={modalHandler}
            border="rounded-3xl"
            bottom="bottom-[332px]" 
            width="w-[393px]" 
            height="h-[208px]"
            deletebutton={true}>
              <div className="flex flex-col w-full h-full justify-center items-center gap-5 mt-12">
                <div className="text-R-20 text-black">배송지 등록 완료</div>
                <div className="text-R-14 text-black/60">배송지 등록이 완료 되었습니다.</div>
                <CustomButton size="mediumLarge" rounded={true} onClick={modalHandler}>
                  확인
                  </CustomButton>
              </div>
            
          </Modal>
              
          </div>
          <div className="flex flex-col h-[130px]">
            <div className="mb-3">받는 분 이름을 입력해 주세요.</div>
            <InputTextBox />
          </div>
          <div className="flex flex-col h-[130px]">
            <div className="mb-3">연락처를 입력해 주세요.</div>
            <InputTextBox />
          </div>
          <div className="flex flex-col items-center h-[102px] justify-end"> 
            <CustomButton size={"mediumLarge"} rounded={true} className="border border-1 border-black/80">
                확인
            </CustomButton>
          </div>
        </div>
      </div>  
    </div>
  );
}
