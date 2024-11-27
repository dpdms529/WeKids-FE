"use client";

import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import Link from "next/link";
import CustomButton from "../atoms/CustomButton";

export default function ChoiceDesign({
  title,
  subText,
  buttonText,
  linkUrl,
  character = "HAPPYING",
  color = "PINK2",
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-R-28 text-white">{title}</div>
      <div className="w-[196px] h-[312px]">
        <CardCharacter selectedCharacter={character} selectedColor={color} />
      </div>
      <div className="text-white">{subText}</div>
      <Link href={linkUrl}>
        <CustomButton size="mediumLarge" rounded={true} className="bg-main02">
          {buttonText}
        </CustomButton>
      </Link>
    </div>
  );
}
