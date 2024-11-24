import React from 'react';
import { characterInfoMap } from '@/src/constants/common';

const CardCharacter = ({ selectedCharacter, selectedColor }) => {
  const cardName = "찬웅핑";

  return (
    <div className={`relative w-[196px] h-[312px] flex-shrink-0 rounded-[14px] border border-black ${selectedColor} shadow-md flex flex-col items-center justify-center`}>
      <img
        src="/images/logoImg.svg" 
        alt="Wekids Logo"
        width={42} 
        height={20}
        className="absolute top-2 left-2"
      />
      <img
        src="/images/CardChip.svg" 
        alt="Card Chip"
        className="absolute top-8 right-1/4 transform -translate-x-1/2 flex-shrink-0"
      />
      <img
        src={characterInfoMap[selectedCharacter].imagePath}
        alt={characterInfoMap[selectedCharacter].name}
        className="w-[192px] h-[191px] flex-shrink-0 mt-10"
      />
      <p className="text-R-20 mt-5 text-black/40">{cardName}</p>
    </div>
  );
};

export default CardCharacter;