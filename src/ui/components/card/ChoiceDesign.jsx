'use client'

import CardCharacter from "@/src/ui/components/card-select/CardCharacter";

export default function ChoiceDesign({ text = "자녀가 선택한 디자인" }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-R-28 text-white">{text}</div>
      <div className="w-[196px] h-[312px]"><CardCharacter selectedCharacter='DADAPING' selectedColor="bg-blueDada" /></div>
    </div>
  );
}
