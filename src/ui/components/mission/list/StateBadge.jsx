import { missionColorMap } from "@/src/constants/common";

const StateBadge = ({
  state,
  isButton = false,
  textSize = "text-R-12",
  radius = "rounded-lg",
}) => {
  const getStateInfo = (state) => {
    return missionColorMap[state] || missionColorMap.NEW;
  };

  const stateInfo = getStateInfo(state);
  const baseClasses = `flex justify-center items-center h-[18px] px-2 text-white ${radius} ${stateInfo.iconBg}`;
  const buttonClasses = isButton ? "cursor-pointer hover:opacity-90" : "";

  return (
    <div className={`${baseClasses} ${buttonClasses}`}>
      <span className={textSize}>{state}</span>
    </div>
  );
};

export default StateBadge;
