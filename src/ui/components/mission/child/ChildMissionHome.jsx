import ChildMissionList from "./ChildMissionList";
import { ChildNoMissionCard } from "./ChildNoMissionCard";

export const ChildMissionHome = ({ data }) => {
  return (
    <div className="overflow-hidden">
      {data.length === 0 ? (
        <ChildNoMissionCard />
      ) : (
        <>
          {/* 버튼들어갈 곳 */}
          <div className="space-y-3">
            {data.map((mission) => (
              <ChildMissionList key={mission.missionId} missiondata={mission} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
