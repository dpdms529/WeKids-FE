import CustomButton from "../../atoms/CustomButton";
import ParentMissionList from "./ParentMissionList";
import { ParentNoMissionCard } from "./ParentNoMissionCard";

const ParentMissionHome = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <p>필터 들어갈 곳</p>
      <div className="flex-1 flex justify-center mb-4 overflow-hidden mt-4">
        {data.length === 0 ? (
          <ParentNoMissionCard />
        ) : (
          <div className="flex-1 overflow-y-auto custom-scrollbar mt-4">
            {data.map((mission) => (
              <ParentMissionList
                key={mission.missionId}
                missiondata={mission}
              />
            ))}
          </div>
        )}
      </div>

      {/* CustomButton: 바닥에 고정 */}
      <div className="sticky bottom-0 bg-white w-full p-4 flex justify-center">
        <CustomButton size="medium" color="main" rounded={true}>
          미션 등록
        </CustomButton>
      </div>
    </div>
  );
};

export default ParentMissionHome;
