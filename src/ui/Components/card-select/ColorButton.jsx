import React from 'react';

const ColorButton = ({ colorClass, onClick }) => {
  return (
    <button onClick={onClick} className={`w-12 h-12 rounded-full ${colorClass} border border-gray-300`}>
      
    </button>
  );
};

export default ColorButton;