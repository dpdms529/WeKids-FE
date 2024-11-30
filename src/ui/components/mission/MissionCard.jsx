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
    <div className="w-[71px] h-[86px] bg-white rounded-lg flex flex-col items-center justify-center -mt-2">
      <Image
        src={characterInfoMap[mission.childProfile].imagePath}
        alt={mission.childName}
        width={68}
        height={68}
      />
      <span className="text-xs text-gray-600">{mission.childName}</span>
    </div>
  );
}

function MissionContent({ mission }) {
  return (
    <div>
      <div className="flex flex-col justify-center flex-shrink-0 text-R-15 truncate whitespace-nowrap overflow-hidden">
        {mission.title}
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 text-R-12 text-xs font-normal">
        {mission.content}
      </div>
      <MissionFooter mission={mission} />
    </div>
  );
}

function MissionFooter({ mission }) {
  return (
    <div className="flex justify-between items-center mt-2">
      <div className="text-[10px] flex items-center gap-1 text-gray-400 whitespace-nowrap">
        <StateIcon state={mission.state} />
        {formatDate(mission.deadline)}
      </div>
      <div className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(mission.state)} ml-3`}>
        {getStatusText(mission.state)}
      </div>
    </div>
  );
}