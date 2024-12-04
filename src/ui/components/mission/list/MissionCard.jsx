import { getBackgroundStyle } from "@/src/util/missionUtils";
import ProfileSection from "@/src/ui/components/mission/list/ProfileSection";
import MissionContent from "@/src/ui/components/mission/list/MissionContent";

export default function MissionCard({ mission, isParent }) {
  return (
    <div
      className={`w-[322px] h-[104px] flex-shrink-0 rounded-2xl p-4 flex flex-col 
        ${getBackgroundStyle(mission.state)} shadow-sm relative`}
    >
      <div className="flex items-start gap-3">
        {isParent && <ProfileSection mission={mission} />}
        <MissionContent mission={mission} isParent={isParent} />
      </div>
    </div>
  );
}
