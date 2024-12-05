"use client";
import { missionColorMap } from "@/src/constants/common";
import { formatDate } from "@/src/util/missionUtils";

import CategoryBadge from "../list/CategoryBadge";
import StateBadge from "../list/StateBadge";
import ChildProfileSection from "./ChildProfileSection";

const ParentMissionList = ({ missiondata }) => {
  const bgColor =
    missiondata?.state && missionColorMap[missiondata.state]
      ? missionColorMap[missiondata.state].background
      : missionColorMap["NEW"].background;

  //todo 필요하면 쓰세요
  //     const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleMissionClick = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div
      className={
        // onClick={handleMissionClick}
        `w-[322px] rounded-xl ${bgColor} px-5 py-3 shadow-md`
      }
    >
      <div className="flex gap-3">
        <div className="flex items-cente">
          <ChildProfileSection
            profileUrl={missiondata.childProfile}
            childName={missiondata.childName}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <StateBadge state={missiondata.state} />
            <CategoryBadge
              missionType={missiondata.category}
              isButton={false}
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-R-14 text-sub02">{missiondata.title}</h3>
            <p className="text-L-12 text-sub02">{missiondata.content}</p>
          </div>
          <p className="text-R-10 text-sub02/60 mt-2">
            🍪 {formatDate(missiondata.deadline)}까지
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentMissionList;
