import Image from "next/image";
import { useState } from 'react';
import { MissionFilterModal } from './MissionFilterModal';

export default function FilterHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="flex items-center gap-1 mb-4 px-1 ml-3 cursor-pointer" 
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src="/images/filtersImg.svg"
          alt="filter icon"
          width={16}
          height={16}
        />
        <span className="text-sm font-medium">FILTER</span>
      </div>

      <MissionFilterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}