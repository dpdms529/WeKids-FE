"use client";

import { useState, useEffect } from "react";
import CustomButton from "../../atoms/CustomButton";
import Image from "next/image";
import Profile from "../../atoms/Profile";
import MissionConfirmModal from "../MissionConfirmModal";
import { getCurrentDateInKoreanFormat } from "@/src/constants/mission";
import { useRouter } from "next/navigation";
import { showMissionDetail } from "@/src/apis/mission";
import { useMissionIDStore } from "@/src/stores/missionFilterStore";
import { urlPath } from "@/src/constants/common";

const MissionAcceptComponent = ({ setIsModalOpen, missionId }) => {
  const [amount, setAmount] = useState(0);
  const [deadline, setDeadline] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [memo, setMemo] = useState("아이가 메시지를 작성하지 않았습니다. ");
  const [childProfile, setChildProfile] = useState(null);
  const [state, SetState] = useState(null);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();
  const { setMissionId } = useMissionIDStore();
  const deadlineDate = new Date(deadline);

  // 예: 특정 로직 처리 후 출력
  const formattedDeadline = `${deadlineDate.getFullYear()}년 ${
    deadlineDate.getMonth() + 1
  }월 ${deadlineDate.getDate()}일`;

  useEffect(() => {
    const fetchMissionDetail = async () => {
      try {
        const missionDetail = await showMissionDetail({ missionId });
        console.log(missionDetail);
        setCategory(missionDetail.category);
        setAmount(missionDetail.amount);
        setTitle(missionDetail.title);
        setContent(missionDetail.content);
        setDeadline(missionDetail.deadline);
        setMissionId(missionDetail.missionId);
        setImage(missionDetail.image);
        missionDetail.memo ? setMemo(missionDetail.memo) : "";
      } catch (error) {
        console.error("Failed to fetch mission details:", error);
      }
    };

    fetchMissionDetail();
  }, []);

  const AddAndCloseModal = (type) => {
    // 추후에 api 연결하고 분기처리
    if (type == "accept") {
      if (state == "SUBMIT") {
        setText(
          `아이가 미션을 완료하지 않았습니다. <br /> 인증을 완료하시겠습니까?`,
        );
      } else {
        router.push(urlPath.MISSION_TRANSFER);
      }

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
          {title}
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
          {content}
        </div>
        <div className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          미션 성공 시 총{" "}
          <span className="text-sub02">{amount.toLocaleString()}</span> 원을
          받을 수 있어요
        </div>
        <div className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          🍪 <span className="text-sub02">{formattedDeadline}</span> 까지 완료할
          수 있어요
        </div>

        <div className="text-R-10 mt-6 text-sub02">미션 완료 인증하기</div>
        <div className="flex flex-row justify-center py-3 px-7 bg-main02/20 w-full h-32 border shadow-md rounded-lg">
          <div className="flex flex-row bg-white">
            {image ? (
              <Image src={image} alt="Example Image" width={100} height={100} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text-R-10 mt-6 text-sub02">자녀가 작성한 메시지</div>
        <div className="p-3 bg-main02/20 border rounded-lg text-R-12 shadow-md text-black/60">
          {memo}
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
                onClick={() => router.push(urlPath.MISSION_TRANSFER)}
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
