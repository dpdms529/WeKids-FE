import { getStatusStyle, getStatusText } from "@/src/util/missionUtils";

export default function StateBadge({ state }) {
    return (
      <div className={`w-[43px] h-[18px] flex items-center justify-center rounded-full text-xs text-white ${getStatusStyle(state)}`}>
      {getStatusText(state)}
    </div>
    );
  }