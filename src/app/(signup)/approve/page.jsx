'use client';

import React from 'react';
import Header from '@/src/ui/layout/Header';
import { characterInfoMap } from '@/src/constants/common';
import CustomButton from '@/src/ui/Components/atoms/CustomButton';

const ParentApprove = () => {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
        <div className="flex-grow flex items-center justify-center">
            <div className="w-[313px] h-[473px] flex-shrink-0 rounded-[40px] border-2 border-black/40 bg-[#57A9FB] flex flex-col items-center justify-center">
             <img
                src={characterInfoMap['HEARTSPRING'].imagePath}
                alt="하츄핑"
                className="w-[192px] h-[191px]"
             />
             <p className="w-[220px] text-white text-center text-R-20 mt-2">
               가족 관계를 <br /> 확인중이에요
             </p>
            </div>
        </div>
        
        <div className="mb-12">
          <CustomButton
            size="medium"
            rounded={true}
            className="w-[313px] h-[62px] px-[82px] py-[22px] justify-center items-center gap-[10px] flex-shrink-0 bg-[#57A9FB] rounded-[11px] text-R-20 mx-auto"
            onClick={() => alert('확인 버튼 클릭')}
          >
            부모님 정보 다시 입력 하기
          </CustomButton>
        </div>
      </div>
    );
  };
  
  export default ParentApprove;