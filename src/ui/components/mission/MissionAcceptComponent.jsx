"use client";

import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Profile from "../atoms/Profile";

const data = {
  1: "미션 설명이 들어갑니다. 미션 설명은 총 몇 자 인가요? 넓이 영역에 대해 한번 고려 해보셔야 할 것 같습니다. 보통 설명이 이렇게까지 길어지는 일이 있을지는 잘 모르겠습니다. 부모님이 자식에게 이 만큼 설명하는 것이 아이 연령을 고려했을 때 불필요한 일일 수도 있습니다만 저희는 최대 길이 영역을 고려하여 디자인 진행을 해야합니다",
  2: "미션 성공 시 총 30,000원을 받을 수 있어요 💙",
  3: "🍪 2024년 11월 20일 (수) 까지 완료할 수 있어요",
  4: "아이가 메시지를 작성하지 않았습니다. "
};

const MissionAcceptComponent = ({ setIsModalOpen, imgPath }) => {
  const [checked, setChecked] = useState(false);

  const AddAndCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };
  return (
    <div className="flex flex-col w-full justify-center items-center p-10 h-full">
      <div className="flex flex-col gap-1 mb-5 w-full ">
        <div className="flex flex-row text-B-22 mb-1">
          <Profile width="w-[30px]" height="h-[30px]" />
        </div>
        <div>미션명~~~~~~~~~~~~</div>
      </div>
      <div className="flex flex-col w-full gap-2 mb-3 overflow-auto scrollbar-hide">
        <div className="text-R-14">💡미션 완료 방법</div>
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800">
          {data[1]}
        </div>
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800">
          {data[2]}
        </div>
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800">
          {data[3]}
        </div>
      
        <div className="text-R-14">💡미션 완료 인증하기</div>
        <div className="flex flex-row justify-between py-3 px-7 bg-gray-100 w-full h-32 border border-gray-300 rounded-md text-sm text-gray-800">
          <div className="flex flex-row bg-white">
            <Image src={imgPath} alt="Example Image" width={100} height={100} />
          </div>
          <div className="flex flex-row bg-white">
            <Image src={imgPath} alt="Example Image" width={100} height={100} />
          </div>
        </div>
        <div className="text-R-14">💡자녀가 작성한 메시지</div>
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-800">
          {data[4]}
        </div>
        <div className="flex flex-row gap-4 w-full justify-between h-[40px]">
          <div className="flex flex-col w-full">
            <CustomButton
              size="mediumLarge"
              rounded={true}
              onClick={AddAndCloseModal}
              className="flex text-R-18 bg-red-500 w-full"
            >
              반려
            </CustomButton>
          </div>
          <div className="flex flex-col w-full">
            <CustomButton
              size="mediumLarge"
              rounded={true}
              onClick={AddAndCloseModal}
              className="text-R-18 bg-main03 w-full"
            >
              승인
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAcceptComponent;
