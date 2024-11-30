"use client";

import { useState } from "react";
import MissionAddComponent from "@/src/ui/components/mission/MissionAddComponent";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import MissionModal from "@/src/ui/components/mission/MissionModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden justify-center items-center p-10 gap-2">
      <CustomButton
        onClick={() => setIsModalOpen(true)}
        size="mediumLarge"
        rounded={true}
      >
        미션 등록하기
      </CustomButton>
      <MissionModal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <MissionAddComponent setIsModalOpen={setIsModalOpen} />
      </MissionModal>
    </div>
  );
}
