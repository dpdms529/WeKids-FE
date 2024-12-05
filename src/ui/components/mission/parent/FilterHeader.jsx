"use client";
import Image from "next/image";
import { useState } from "react";
import { MissionFilterModal } from "../list/MissionFilterModal";

export default function FilterHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center mt-3 gap-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src="/images/filtersImg.svg"
          alt="filter icon"
          width={16}
          height={16}
        />
        <span className="text-R-13">FILTER</span>
      </div>

      <MissionFilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
