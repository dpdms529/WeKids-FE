"use client";

import { useState } from "react";
import MissionRequestComponent from "./child/MissionRequestComponent";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import MissionModal from "@/src/ui/components/atoms/MissionModal";
import MissionAddComponent from "./parent/MissionAddComponent";

export default function MissionDetail({ type }) {
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
        {type == "request" ? (
          <MissionRequestComponent setIsModalOpen={setIsModalOpen} />
        ) : (
          <MissionAddComponent setIsModalOpen={setIsModalOpen} />
        )}
      </MissionModal>
    </>
  );
}
