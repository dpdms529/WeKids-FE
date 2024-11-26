import React, { useEffect, useState } from "react";
import { characterInfoMap, colorTypeMap } from "@/src/constants/common";
import Image from "next/image";

const CardCharacter = ({ selectedCharacter, selectedColor }) => {
  const [cardName, setCardName] = useState("");

  useEffect(() => {
    const dummyData = {
      1: { cardName: "찬웅핑" },
      2: { cardName: "윤정핑" },
    };

    // ID 1의 카드 이름 가져오기
    const card = dummyData[1];
    if (card) {
      setCardName(card.cardName);
    } else {
      console.error("Card not found");
    }
  }, []);

  return (
    <div
      className={`relative w-[196px] h-[312px] flex-shrink-0 rounded-[14px] border border-black ${colorTypeMap[selectedColor].colorClass} shadow-2xl flex flex-col items-center justify-center`}
    >
      <Image
        src="/images/logoImg.svg"
        alt="Wekids Logo"
        width={42}
        height={20}
        className="absolute top-2 left-2"
      />
      <Image
        src="/images/CardChip.svg"
        alt="Card Chip"
        width={31}
        height={24}
        className="absolute top-8 right-1/4 transform -translate-x-1/2 flex-shrink-0"
      />
      <Image
        src={characterInfoMap[selectedCharacter].imagePath}
        alt={characterInfoMap[selectedCharacter].name}
        width={192}  
        height={191}
        className="w-[192px] h-[191px] flex-shrink-0 mt-10"
      />
      <p className="text-R-20 mt-5 text-black/40">{cardName}</p>
    </div>
  );
};

export default CardCharacter;
