"use client";

import { useState } from "react";
import MissionAddComponent from "@/src/ui/components/mission/parent/MissionAddComponent";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import MissionModal from "@/src/ui/components/mission/MissionModal";

export default function MissionDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
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
    </>
  );
}
