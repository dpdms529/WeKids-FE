import { getStatusStyle, getStatusText } from "@/src/util/missionUtils";

export default function StateBadge({ state, isHeader = false }) {
  
  const badgeSize = !isHeader
    ? "w-[43px] h-[18px] rounded-full"
    : "w-[58px] h-[33px] rounded-[7px]";
   
  return (
    <div className={`flex items-center justify-center text-R-14 text-white ${badgeSize} ${getStatusStyle(state)}`}>
      {getStatusText(state)}
    </div>
  );
}