import React from 'react';
import Profile from '@/src/ui/Components/atoms/Profile';

const CharacterButton = ({ character, imagePath, onClick }) => {
  return (
    <button onClick={onClick} className="w-20 h-20 cursor-pointer overflow-hidden rounded-full"> 
      <Profile 
        imagePath={imagePath} 
        className="w-full h-full object-cover transform scale-150 translate-x-[+00%] translate-y-[+20%]" 
      />
    </button>
  );
};

export default CharacterButton;