'use client';
import { ReloadIcon } from "@radix-ui/react-icons";
import React from 'react';
import { useRouter } from 'next/navigation';
import { urlPath } from "@/src/constants/common";
import CardDisplay from '@/src/ui/components/card/CardDisplay';
import CustomButton from '@/src/ui/Components/atoms/CustomButton';
import Header from '@/src/ui/layout/Header';

const CardIssueCompleteNodelivery = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-between h-screen bg-white">
          <Header />
          <div className="flex-grow flex items-center justify-center">
              <CardDisplay 
                  selectedCharacter="HEARTSPRING" 
                  selectedColor="bg-pinkHachu" 
                  buttonText="뒷면보기" 
                  message="카드 발급을 완료했습니다!" 
              />
          </div>
        
        <div>
          <CustomButton 
            size={"large"}
            rounded={false}
            onClick={() => router.push(urlPath.HOME)}
          >
            배송지 등록하러가기
          </CustomButton>
        </div>
      </div>
    );
  };
  
  export default CardIssueCompleteNodelivery;