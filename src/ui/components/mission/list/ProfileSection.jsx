import Image from "next/image";
import { characterInfoMap } from "@/src/constants/common";

export default function ProfileSection({ mission }) {
  return (
    <div className="w-[64px] h-[79px] bg-white rounded-lg flex flex-col items-center justify-center">
      <div className="relative top-2">
        <Image
          src={characterInfoMap[mission.childProfile].imagePath}
          alt={mission.childName}
          width={52}
          height={55}
        />
      </div>
      <div className="flex flex-col justify-center w-[67px] h-[18px] bg-main02 rounded-b-[10px] mt-3 flex-shrink-0">
        <span className="text-L-10 text-white text-center">
          {mission.childName}
        </span>
      </div>
    </div>
  );
}
