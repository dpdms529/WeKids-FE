import React from 'react';
import Profile from '@/src/ui/Components/atoms/Profile';

const CharacterButton = ({ character, imagePath, onClick }) => {
  return (
    <button onClick={onClick} className="w-20 h-20 cursor-pointer"> 
      <Profile imagePath={imagePath} className="w-full h-full" />
    </button>
  );
};

export default CharacterButton;