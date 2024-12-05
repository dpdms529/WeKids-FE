import { missionColorMap } from "@/src/constants/common";

const StateBadge = ({
  state,
  isButton = false,
  textSize = "text-R-12",
  radius = "rounded-lg",
  height = "h-[18px]",
  px = "px-2",
  onClick, // onClick prop 추가
}) => {
  const getStateInfo = (state) => {
    return missionColorMap[state] || missionColorMap["NEW"];
  };

  const stateInfo = getStateInfo(state);
  const baseClasses = `flex justify-center items-center ${height} ${px} text-white ${radius} ${stateInfo.iconBg}`;
  const buttonClasses = isButton ? "cursor-pointer hover:opacity-90" : "";
  const Component = isButton ? "button" : "div";
  return (
    <Component
      className={`${baseClasses} ${buttonClasses}`}
      onClick={isButton ? onClick : undefined}
    >
      <span className={textSize}>{stateInfo.text}</span>
    </Component>
  );
};

export default StateBadge;
