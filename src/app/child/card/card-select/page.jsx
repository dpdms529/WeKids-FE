"use client";

import React, { useState } from "react";
import { characterInfoMap, ColorTypeMap } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import ColorButton from "@/src/ui/components/card-select/ColorButton";
import CharacterButton from "@/src/ui/components/card-select/CharacterButton";
import CardIssueModal from "@/src/ui/components/card-select/CardIssueModal";
import { designCreate } from "@/src/apis/design";
import { useDesignStore } from "@/src/stores/designStore";

export default function CardDesignSelector() {
  const {
    selectedCharacter,
    selectedColor,
    setSelectedCharacter,
    setSelectedColor,
  } = useDesignStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = async () => {
    try {
      const designData = {
        character: selectedCharacter,
        color: selectedColor,
      };
      console.log("Sending design data:", designData); // 데이터 확인

      const response = await designCreate(designData);
      console.log("Design created:", response); // 응답 확인
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to create design:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col items-center">
        <h2 className="flex text-R-20 mb-4 ml-11 w-full">카드 디자인 선택</h2>
        <div className="w-[331px] h-[935px] flex-shrink-0 rounded-[10px] border border-black bg-white p-4">
          <div className="flex flex-col items-center mt-4">
            <CardCharacter
              selectedCharacter={selectedCharacter}
              selectedColor={selectedColor}
            />
          </div>
          <div className="text-center mb-12 mt-10">
            <h3 className="R-20 mb-3">배경색</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-5 justify-items-center">
                {Object.values(ColorTypeMap).map((info) => (
                  <ColorButton
                    key={info.colorClass}
                    colorClass={info.colorClass}
                    onClick={() => setSelectedColor(info.colorClass)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-4">
            <h3 className="R-20 mb-4">카드 캐릭터</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-5">
                {Object.keys(characterInfoMap).map((character) => (
                  <CharacterButton
                    key={character}
                    character={character}
                    imagePath={characterInfoMap[character].imagePath}
                    className="w-12 h-12 cursor-pointer"
                    onClick={() => setSelectedCharacter(character)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex mt-10 mb-4">
        <CustomButton size="large" onClick={handleConfirm}>
          확인
        </CustomButton>
        <CardIssueModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
