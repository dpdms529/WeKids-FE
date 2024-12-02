import { getBackgroundStyle } from "@/src/util/missionUtils";
import ProfileSection from "@/src/ui/components/mission/list/ProfileSection";
import MissionContent from "@/src/ui/components/mission/list/MissionContent";

export default function MissionCard({ mission }) {
  return (
    <div 
      className={`w-[322px] h-[104px] flex-shrink-0 rounded-2xl p-4 flex flex-col 
        ${getBackgroundStyle(mission.state)} shadow-sm relative`}
    >
      <div className="flex items-start gap-3">
        <ProfileSection mission={mission} />
        <MissionContent mission={mission} />
      </div>
    </div>
  );
}