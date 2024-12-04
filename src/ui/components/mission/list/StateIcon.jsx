import Image from "next/image";
const StateIcon = ({ state }) => {
  const getStateInfo = (state) => {
    const stateInfo = {
      ACC: {
        icon: "/images/trashImg.svg",
        text: "청소"
      },
      NEW: {
        icon: "/images/pencilImg.svg",
        text: "자기계발"
      },
      PRO: {
        icon: "/images/pinImg.svg",
        text: "생활습관"
      },
      REJ: {
        icon: "/images/ectImg.svg",
        text: "기타"
      },
      DONE: {
        icon: "/images/trashImg.svg",
        text: "청소"
      }
    };
    return stateInfo[state] || stateInfo.NEW;
  };

  const stateInfo = getStateInfo(state);

  return (
    <div className="flex items-center gap-[2px]">
      <Image
        src={stateInfo.icon}
        alt={`${state} icon`}
        width={16}
        height={16}
      />
      <span className="text-R-10">{stateInfo.text}</span>
    </div>
  );
};

export default StateIcon;