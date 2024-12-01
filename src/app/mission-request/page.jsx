"use client";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import MissionModal from "@/src/ui/components/mission/MissionModal";
import MissionRequestComponent from "@/src/ui/components/mission/MissionRequestComponent";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState("");

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
        <MissionRequestComponent
          setIsModalOpen={setIsModalOpen}
          setFile={setFile}
        />
      </MissionModal>
    </div>
  );
}
