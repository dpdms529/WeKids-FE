import React from 'react';
import { characterInfoMap } from '@/src/constants/common';

const CardCharacter = ({ selectedCharacter, selectedColor }) => {
  const cardName = "찬웅핑";

  return (
    <div className={`relative w-[196px] h-[312px] flex-shrink-0 rounded-[14px] border border-black ${selectedColor} shadow-md flex flex-col items-center justify-center`}>
      <img
        src="/images/logoImg.svg" 
        alt="Wekids Logo"
        width={50} 
        height={24}
        className="absolute top-2 left-2"
      />
      <img
        src="/images/CardChip.svg" 
        alt="Card Chip"
        width={20} 
        height={20}
        className="absolute top-10 left-24"
      />
      <img
        src={characterInfoMap[selectedCharacter].imagePath}
        alt={characterInfoMap[selectedCharacter].name}
        className="w-40 h-40 mt-10"
      />
      <p className="text-R-20 mt-5 text-black/40">{cardName}</p>
    </div>
  );
};

export default CardCharacter;