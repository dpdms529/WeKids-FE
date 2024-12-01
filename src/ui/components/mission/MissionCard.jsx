import Image from "next/image";
import { characterInfoMap } from "@/src/constants/common";
import StateIcon from "./StateIcon";
import { formatDate, getStatusStyle, getBackgroundStyle, getStatusText } from "@/src/util/missionUtils";

export default function MissionCard({ mission }) {
  return (
    <div 
      className={`
        w-[322px] h-[104px] flex-shrink-0 
        rounded-2xl p-4 flex flex-col 
        ${getBackgroundStyle(mission.state)}
        shadow-sm
        relative
      `}
    >
      <div className="flex items-start gap-3">
        <ProfileSection mission={mission} />
        <MissionContent mission={mission} />
      </div>
    </div>
  );
}

function ProfileSection({ mission }) {
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
      <div className="
        flex flex-col justify-center w-[67px] h-[18px] bg-main02 rounded-b-[10px] mt-3 flex-shrink-0">
        <span className="text-[10px] text-white text-center">{mission.childName}</span>
      </div>
    </div>
  );
}

function MissionContent({ mission }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 -ml-1">
        <div className={`px-2 py-1 rounded-full text-xs text-white ${getStatusStyle(mission.state)}`}>
          {getStatusText(mission.state)}
        </div>
        
        <div className="px-2 py-1 bg-white rounded-full">
        <StateIcon state={mission.state} />
        </div>
      </div>
      
      <div className="flex flex-col justify-center flex-shrink-0 text-R-14 truncate whitespace-nowrap overflow-hidden -mt-1">
        {mission.title}
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 text-L-12 text-xs text-[#123F6D]">
        {mission.content}
      </div>
      <MissionFooter mission={mission} />
    </div>
  );
}

function MissionFooter({ mission }) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-R-10 flex items-center gap-1 text-gray-400 whitespace-nowrap mt-1">
        {formatDate(mission.deadline)}
      </div>
    </div>
  );
}