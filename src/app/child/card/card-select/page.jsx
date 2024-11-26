"use client";

import React, { useState } from "react";
import { characterInfoMap } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import ColorButton from "@/src/ui/components/card-select/ColorButton";
import CharacterButton from "@/src/ui/components/card-select/CharacterButton";
import CardIssueModal from "@/src/ui/components/card-select/CardIssueModal";

const CardDesignSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("DADAPING");
  const [selectedColor, setSelectedColor] = useState("bg-blueDada");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleColorClick = (colorClass) => {
    setSelectedColor(colorClass);
  };

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col items-center">
        <h2 className="R-20 mb-4 text-left w-full">카드 디자인 선택</h2>
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
                {Object.values(characterInfoMap).map((info) => (
                  <ColorButton
                    key={info.colorClass}
                    colorClass={info.colorClass}
                    onClick={() => handleColorClick(info.colorClass)}
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
                    onClick={() => handleCharacterClick(character)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex mt-10 mb-4">
        <CustomButton size="large" onClick={() => setIsModalOpen(true)}>
          확인
        </CustomButton>
        <CardIssueModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default CardDesignSelector;
