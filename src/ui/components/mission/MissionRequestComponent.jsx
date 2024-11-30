'use client';

import { useRef, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import Profile from "../atoms/Profile";
import Image from "next/image";
import InputTextBox from "../atoms/InputTextBox";

const data = {
  1: "미션 설명이 들어갑니다. 미션 설명은 총 몇 자 인가요? 넓이 영역에 대해 한번 고려 해보셔야 할 것 같습니다. 보통 설명이 이렇게까지 길어지는 일이 있을지는 잘 모르겠습니다. 부모님이 자식에게 이 만큼 설명하는 것이 아이 연령을 고려했을 때 불필요한 일일 수도 있습니다만 저희는 최대 길이 영역을 고려하여 디자인 진행을 해야합니다",
  2: "미션 성공 시 총 30,000원을 받을 수 있어요 💙",
  3: "🍪 2024년 11월 20일 (수) 까지 완료할 수 있어요",
  4: "아이가 메시지를 작성하지 않았습니다. ",
  5: "이곳에 미션명이 들어갑니다."
};

const MissionRequestComponent = ({ setIsModalOpen, setFile }) => {
  const [previewURL, setPreviewURL] = useState("");
  const fileRef = useRef();
  const [reward, setReward] = useState(0);
  const [period, setPeriod] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const AddAndCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentDateInKoreanFormat = () => {
  
    const year = period.getFullYear();
    const month = String(period.getMonth() + 1).padStart(2, '0');
    const day = String(period.getDate()).padStart(2, '0');
  
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekDay = weekDays[period.getDay()];
  
    return `${year}년 ${month}월 ${day}일 (${weekDay})`;
  };

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  const handleDeleteFile = () => {
    setPreviewURL("");
    setFile(null);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-10 h-full">
    <div className="flex flex-col gap-1 mb-5 w-full ">
      <div className="flex flex-row text-B-22 mb-1">
        <Profile width="w-[30px]" height="h-[30px]" imagePath="https://ssl.pstatic.net/static/pwe/address/img_profile.png" />
      </div>
      <div className="text-black text-B-20">{data[5]}</div>
    </div>
    <div className="flex flex-col w-full gap-2 mb-3 overflow-auto scrollbar-hide">
      <div className="text-R-14">💡미션 완료 방법</div>
      <div className="p-3 bg-blue-100 border rounded-lg text-R-12 shadow-md text-black">
        {data[1]}
      </div>
      <div className="p-3 bg-blue-100 border rounded-lg text-R-12 shadow-md text-black">
        미션 성공 시 총  <strong>{reward}</strong>  원을 받을 수 있어요 💙
      </div>
      <div className="p-3 bg-blue-100 border rounded-lg text-R-12 shadow-md text-black">
        🍪 <strong className="text-main01">{period ? getCurrentDateInKoreanFormat() : ""}</strong> 까지 완료할 수 있어요
      </div>
    
      <div className="text-R-14">💡미션 완료 인증하기</div>
        <div className="flex flex-col items-center justify-center p-3 bg-blue-100 w-full h-32 border shadow-md rounded-lg">
          
        {previewURL ? (
          <div className="flex flex-row gap-2 justify-between w-full h-28">
          <Image
            src={previewURL}
            alt="Uploaded Preview"
            width={100}
            height={100}
            className="rounded-md object-contain bg-white w-full h-auto"
          />
          
              <button
                className="w-20 h-28 flex flex-col items-center justify-center bg-black/10 hover:bg-black/40 rounded-md"
                onClick={handleDeleteFile}
              >
                <Image src="/images/deleteImg.svg" alt="delete image" width={100} height={100} />
                <p className="text-R-12">삭제</p>
              </button>
            
            </div>
        ) : (
          <>
            <button
              className="w-12 h-12 flex items-center justify-center bg-black/10 hover:bg-black/40 rounded-full"
              onClick={handleFileButtonClick}
            >
              <Image src="/images/backupImg.svg" alt="upload image" width={50} height={50} className="bg-blue-100" />
            </button>
            <input
              ref={fileRef}
              hidden={true}
              id="file"
              type="file"
              onChange={handleFileOnChange}
            />
            <p className="text-sm text-gray-600 mt-2">드래그하거나 파일을 업로드하세요.</p>
          </>
        )}
      
      </div>
      <div className="text-R-14">💡부모님께 보낼 메시지</div>
      <div className=" bg-blue-100 rounded-lg text-R-12 shadow-md text-black">
          <textarea
            className="w-full h-20 bg-blue-100 rounded-md resize-none outline-none p-2"
          ></textarea>
        </div>
      <div className="flex flex-row w-full justify-center h-[40px] px-10 mt-2">
        
        <div className="flex flex-col h-full w-full">
          <CustomButton
            size="mediumLarge"
            rounded={true}
            onClick={AddAndCloseModal}
            className="text-R-18 bg-main03 w-full"
          >
            미 션 완 료
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
);
};

export default MissionRequestComponent;
