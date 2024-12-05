"use client";

import { useState } from "react";
import CustomButton from "../../atoms/CustomButton";
import Image from "next/image";
import Profile from "../../atoms/Profile";
import MissionConfirmModal from "../MissionConfirmModal";
import { getCurrentDateInKoreanFormat } from "@/src/constants/mission";

const data = {
  1: "미션 설명이 들어갑니다. 미션 설명은 총 몇 자 인가요? 넓이 영역에 대해 한번 고려 해보셔야 할 것 같습니다. 보통 설명이 이렇게까지 길어지는 일이 있을지는 잘 모르겠습니다. 부모님이 자식에게 이 만큼 설명하는 것이 아이 연령을 고려했을 때 불필요한 일일 수도 있습니다만 저희는 최대 길이 영역을 고려하여 디자인 진행을 해야합니다",
  2: "미션 성공 시 총 30,000원을 받을 수 있어요",
  3: "🍪 2024년 11월 20일 (수) 까지 완료할 수 있어요",
  4: "아이가 메시지를 작성하지 않았습니다. ",
  5: "이곳에 미션명이 들어갑니다.",
};

const MissionAcceptComponent = ({ setIsModalOpen, imgPath }) => {
  const [checked, setChecked] = useState(false);
  const [reward, setReward] = useState(1000000000000000);
  const [period, setPeriod] = useState(new Date());
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [text, setText] = useState("");
  const AddAndCloseModal = (type) => {
    // 추후에 api 연결하고 분기처리
    if (type == "accept") {
      setText(
        `아이가 미션을 완료하지 않았습니다. <br /> 인증을 완료하시겠습니까?`,
      );
      setConfirmModalOpen(true);
    } else if (type == "denied") {
      setText(`반려 버튼을 누르셨습니다. <br /> 정말 반려하시겠습니까?`);
      setConfirmModalOpen(true);
    }

    //setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-full">
      <div className="flex flex-col gap-1 mb-2 w-full pt-10 px-7 ">
        <div className="flex flex-row text-B-22 mb-1">
          <Profile
            width="w-[23px]"
            height="h-[23px]"
            imagePath="https://ssl.pstatic.net/static/pwe/address/img_profile.png"
          />
        </div>
        <div className="text-sub02 text-R-15 flex flex-row">
          {data[5]}
          <Image
            src="images/trashImg.svg"
            width={19}
            height={19}
            alt="delete icon"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 mb-3 pt-1 px-7 pb-1 overflow-auto">
        <div className="text-R-10 text-sub02">미션 완료 방법</div>
        <div className="p-3 bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          {data[1]}
        </div>
        <div className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          미션 성공 시 총{" "}
          <span className="text-sub02">{reward.toLocaleString()}</span> 원을
          받을 수 있어요
        </div>
        <div className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          🍪{" "}
          <span className="text-sub02">
            {period ? getCurrentDateInKoreanFormat(period) : ""}
          </span>{" "}
          까지 완료할 수 있어요
        </div>

        <div className="text-R-10 mt-6 text-sub02">미션 완료 인증하기</div>
        <div className="flex flex-row justify-center py-3 px-7 bg-main02/20 w-full h-32 border shadow-md rounded-lg">
          <div className="flex flex-row bg-white">
            <Image src={imgPath} alt="Example Image" width={100} height={100} />
          </div>
        </div>
        <div className="text-R-10 mt-6 text-sub02">자녀가 작성한 메시지</div>
        <div className="p-3 bg-main02/20 border rounded-lg text-R-12 shadow-md text-black/60">
          {data[4]}
        </div>
        <div className="flex flex-row gap-4 w-full justify-between h-[40px] mt-9">
          <div className="flex flex-col w-full">
            <CustomButton
              size="mediumLarge"
              rounded={true}
              onClick={() => AddAndCloseModal("accept")}
              className="text-R-15 bg-main02 w-full"
            >
              승인
            </CustomButton>
            {isConfirmModalOpen && (
              <MissionConfirmModal
                setParentOpen={setIsModalOpen}
                setOpen={setConfirmModalOpen}
                text={text}
              />
            )}
          </div>
          <div className="flex flex-col w-full">
            <CustomButton
              size="mediumLarge"
              rounded={true}
              onClick={() => AddAndCloseModal("denied")}
              className="flex text-R-15 bg-red01 hover:bg-redHover w-full"
            >
              반려
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAcceptComponent;
