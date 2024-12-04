import Image from "next/image";
const CategoryBadge = ({ missionType }) => {
  const getStateInfo = (missionType) => {
    const stateInfo = {
      HOUSE_WORK: {
        icon: "/images/trashImg.svg",
        text: "청소",
      },
      SELF_DEVELOPMENT: {
        icon: "/images/pencilImg.svg",
        text: "자기계발",
      },
      LIFESTYLE_HABITS: {
        icon: "/images/pinImg.svg",
        text: "생활습관",
      },
      ETC: {
        icon: "/images/ectImg.svg",
        text: "기타",
      },
    };
    return stateInfo[missionType] || stateInfo.NEW;
  };

  const stateInfo = getStateInfo(missionType);

  return (
    <div className="h-[18px] flex items-center bg-white rounded-md px-2">
      <Image
        src={stateInfo.icon}
        alt={`${missionType} icon`}
        width={14}
        height={14}
        className="mr-1"
      />
      <span className="text-R-10">{stateInfo.text}</span>
    </div>
  );
};

export default CategoryBadge;
