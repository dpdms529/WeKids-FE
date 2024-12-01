import Image from "next/image";
const StateIcon = ({ state }) => {
  const getStateInfo = (state) => {
    const stateInfo = {
      ACC: {
        icon: "/images/clean.svg",
        text: "청소"
      },
      NEW: {
        icon: "/images/pencil.svg",
        text: "자기계발"
      },
      PRO: {
        icon: "/images/drawing-pin-solid.svg",
        text: "생활습관"
      },
      REJ: {
        icon: "/images/new.svg",
        text: "기타"
      },
      DONE: {
        icon: "/images/clean.svg",
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
      <span className="text-xs text-gray-600">{stateInfo.text}</span>
    </div>
  );
};

export default StateIcon;