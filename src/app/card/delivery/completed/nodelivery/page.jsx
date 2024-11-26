'use client';
import { ReloadIcon } from "@radix-ui/react-icons";
import React from 'react';
import CardCharacter from '@/src/ui/Components/card-select/CardCharacter';
import CustomButton from '@/src/ui/Components/atoms/CustomButton';
import Header from '@/src/ui/layout/Header';
const CardIssueCompleteNodelivery = () => {
    return (
      <div className="flex flex-col justify-between h-screen bg-white">
        <Header />
        <div className="flex-grow flex items-center justify-center">
            {/* 배경색 bg-[#57A9FB]에서 bg-MainColor로 추후 변경*/}
            <div className="w-[313px] h-[513px] flex-shrink-0 rounded-[40px] border-2 border-black/40 bg-[#57A9FB] flex flex-col items-center justify-center">
            <CardCharacter selectedCharacter="HEARTSPRING" selectedColor="bg-pinkHachu" />      
                <button className="flex items-center mt-4 w-[79px] h-[26px] flex-shrink-0 rounded-[10px] bg-[#D9D9D9] text-R-10 text-black pl-1">
                    <ReloadIcon className="mr-2 transform rotate-180 scale-x-[-1]" />
                    뒷면보기
                </button>
                <p className="mt-4 text-white text-R-20">
                    카드 발급을 완료했습니다!
                </p>
            </div>
        </div>
        
        <div>
          <CustomButton 
            size="large" 
            className="w-full"
            onClick={() => alert('확인 버튼 클릭')}>
            배송지 등록하러가기
          </CustomButton>
        </div>
      </div>
    );
  };
  
  export default CardIssueCompleteNodelivery;