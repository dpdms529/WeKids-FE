import StateIcon from "./StateIcon";
import StateBadge from "./list/StateBadge";
import MissionFooter from "./MissionFooter";

export default function MissionContent({ mission }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 -ml-1">
        <StateBadge state={mission.state} />
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