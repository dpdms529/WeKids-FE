import { formatDate } from "@/src/util/missionUtils";

export default function MissionFooter({ mission }) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-R-10 flex items-center gap-1 text-gray-400 whitespace-nowrap mt-1">
        {formatDate(mission.deadline)}
      </div>
    </div>
  );
}