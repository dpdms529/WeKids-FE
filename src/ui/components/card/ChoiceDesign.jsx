"use client";

import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { designFetch } from "@/src/services/design";
import { useColorStore } from "@/src/stores/cardStore";

export default function ChoiceDesign({
  title,
  subText,
  buttonText,
  linkUrl,
  character = "HEARTSPRING",
  color = "PINK2",
}) {
  const [designData, setDesignData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {setChildChacter, setChildColor} = useColorStore();

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        setIsLoading(true);
        console.log("!!!!!")
        const data = await designFetch();
        console.log(data);
        setDesignData(data);
        setChildChacter(data?.character || character);
        setChildColor(data?.color || color);
      } catch (error) {
      } finally {
        setIsLoading(false);
        
      }
    };
    fetchDesign();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-R-28 text-white">{title}</div>
      <div className="w-[196px] h-[312px]">
        <CardCharacter
          selectedCharacter={designData?.character || character}
          selectedColor={designData?.color || color}
        />
      </div>
      <div className="text-white">{subText}</div>
      <Link href={linkUrl}>
        <CustomButton size="mediumLarge" rounded={true} className="bg-main02 text-R-20">
          {buttonText}
        </CustomButton>
      </Link>
    </div>
  );
}
