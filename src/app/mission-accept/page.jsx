"use client";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import MissionModal from "@/src/ui/components/mission/MissionModal";
import MissionAcceptComponent from "@/src/ui/components/mission/parent/MissionAcceptComponent";

const imgPath = "/images/hachupingImg.svg";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden justify-center items-center p-10 gap-2">
      <CustomButton
        onClick={() => setIsModalOpen(true)}
        size="mediumLarge"
        rounded={true}
      >
        미션 승인하기
      </CustomButton>
      <MissionModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <MissionAcceptComponent
          setIsModalOpen={setIsModalOpen}
          imgPath={imgPath}
          missionId={1}
        />
      </MissionModal>
    </div>
  );
}
