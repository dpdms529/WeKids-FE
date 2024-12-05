"use client";

import { designFetch } from "@/src/apis/design";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useColorStore, useSensitiveDataStore } from "@/src/stores/cardStore";

export default function ChoiceDesign({
  title,
  subText,
  buttonText,
  linkUrl,
  character = "HEARTSPRING",
  color = "PINK2",
}) {
  const [design, setDesign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setChildCharacter, setChildColor } = useColorStore();
  const {childId} = useSensitiveDataStore();

  useEffect(() => {
    console.log(childId)
    const fetchDesign = async () => {
      try {
        console.log("Fetching design...");
        const data = await designFetch({childId});
        console.log(data);
        setDesign(data); // zustand에 저장
        if (setChildCharacter && setChildColor) {
          setChildCharacter(data?.character || character);
          setChildColor(data?.color || color);
        }
      } catch (error) {
        console.error("Error fetching design:", error.message);
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
          selectedCharacter={design?.character || character}
          selectedColor={design?.color || color}
        />
      </div>
      <div className="text-white">{subText}</div>
      <Link href={linkUrl}>
        <CustomButton
          size="mediumLarge"
          rounded={true}
          className="bg-main02 text-R-20"
        >
          {buttonText}
        </CustomButton>
      </Link>
    </div>
  );
}
