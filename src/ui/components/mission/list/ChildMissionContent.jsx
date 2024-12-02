import StateBadge from "./StateBadge";
import MissionFooter from "./MissionFooter";
import StateIconBadge from "./StateIconBadge";

export default function ChildMissionContent({ mission }) {
    return (
      <div className="flex items-start justify-between">
        <div className="flex-1 mt-2">
          
          <div className="flex flex-col justify-center text-R-14 truncate whitespace-nowrap overflow-hidden -mt-1">
            {mission.title}
          </div>
          
          <div className="flex flex-col justify-center text-L-12 text-sub02 mt-1">
            {mission.content} 
          </div>
        </div>
  
        <div className="flex flex-col items-end gap-1">
          <StateBadge state={mission.state} />
          <StateIconBadge state={mission.state} />
          <MissionFooter mission={mission} />
        </div>
      </div>
    );
  }