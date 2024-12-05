"use client";
import { useState } from "react";
import ChildMissionHeader from "./ChildMissionHeader";
import ChildMissionList from "./ChildMissionList";
import { ChildNoMissionCard } from "./ChildNoMissionCard";

export const ChildMissionHome = ({ data }) => {
  const [selectedState, setSelectedState] = useState(null);
  console.log(selectedState);
  

  const filteredData = selectedState
    ? data.filter((mission) => mission.state === selectedState)
    : data;

  return (
    <div className="overflow-hidden mb-10">
      {data.length === 0 ? (
        <ChildNoMissionCard />
      ) : (
        <>
          <ChildMissionHeader
            onStateChange={setSelectedState}
            selectedState={selectedState}
          />
          <div className="space-y-3">
            {filteredData.map((mission) => (
              <ChildMissionList key={mission.missionId} missiondata={mission} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
