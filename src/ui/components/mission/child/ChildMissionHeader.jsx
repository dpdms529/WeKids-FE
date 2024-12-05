"use client";
import StateBadge from "../list/StateBadge";

const ChildMissionHeader = ({ onStateChange, selectedState }) => {
  const missionStates = ["ACC", "NEW", "SUB", "REJ", "DONE"];

  const handleStateClick = (state) => {
    const newState = selectedState === state ? null : state;
    onStateChange(newState);
  };

  return (
    <div className="w-[314px] mx-auto mb-7 mt-8">
      <div className="flex justify-between gap-1">
        {missionStates.map((state) => (
          <StateBadge
            key={state}
            state={state}
            isButton={true}
            textSize="text-R-14"
            radius="rounded-md"
            height="h-[30px]"
            px="px-3"
            isSelected={selectedState === state}
            onClick={() => handleStateClick(state)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChildMissionHeader;
