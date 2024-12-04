import StateIcon from "./StateIcon";
import StateBadge from "./StateBadge";
import MissionFooter from "./MissionFooter";
import ChildMissionContent from "./ChildMissionContent";

export default function MissionContent({ mission, isParent }) {
  if (!isParent) {
    return <ChildMissionContent mission={mission} isParent={isParent} />;
  }

  return (
    <div className={`${!isParent ? "w-full" : ""}`}>
      <div className="flex items-center gap-2 mb-2 -ml-1">
        <StateBadge state={mission.state} isParent={false} isHeader={false} />
        <div className="px-2 py-1 bg-white rounded-full">
          <StateIcon state={mission.state} />
        </div>
      </div>

      <div className="flex flex-col justify-center flex-shrink-0 text-R-14 truncate whitespace-nowrap overflow-hidden -mt-1">
        {mission.title}
      </div>
      <div className="flex flex-col justify-center flex-shrink-0 text-L-12">
        {mission.content}
      </div>
      <MissionFooter mission={mission} isParent={isParent} />
    </div>
  );
}
