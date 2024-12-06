import { missionColorMap } from "@/src/constants/common";
import { useState } from "react";

const StateBadge = ({
  state,
  isButton = false,
  textSize = "text-R-12",
  radius = "rounded-lg",
  height = "h-[18px]",
  px = "px-2",
  isSelected = false,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(isSelected); // 선택 상태 관리

  const getStateInfo = (state) => {
    return missionColorMap[state] || missionColorMap["NEW"];
  };

  const stateInfo = getStateInfo(state);
  const baseClasses = `flex justify-center items-center ${height} ${px} ${radius}`;

  // 선택 상태에 따른 색상 결정
  const colorClasses = isButton
    ? isClicked
      ? `${stateInfo.iconBg} text-white` // 선택되었을 때 원래 색상
      : "bg-gray-300 text-white" // 선택되지 않았을 때 회색
    : `${stateInfo.iconBg} text-white`; // 버튼이 아닐 때는 원래 색상

  const buttonClasses = isButton ? "cursor-pointer hover:opacity-90" : "";

  const Component = isButton ? "button" : "div";

  const handleClick = () => {
    if (isButton) {
      setIsClicked((prev) => !prev); // 클릭 시 상태 토글
      if (onClick) onClick(); // 외부에서 전달된 onClick 호출
    }
  };

  return (
    <Component
      className={`${baseClasses} ${colorClasses} ${buttonClasses}`}
      onClick={handleClick}
    >
      <span className={textSize}>{stateInfo.text}</span>
    </Component>
  );
};

export default StateBadge;
