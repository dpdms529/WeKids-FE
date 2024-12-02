import { getStatusStyle, getStatusText } from "@/src/util/missionUtils";

export default function StateBadge({ state }) {
    return (
      <div className={`px-2 py-1 rounded-full text-xs text-white ${getStatusStyle(state)}`}>
        {getStatusText(state)}
      </div>
    );
  }