import Image from "next/image";

const StateIcon = ({ state }) => {
  const getStateIcon = (state) => {
    const icons = {
      ACC: "/images/clean.svg",
      NEW: "/images/new.svg",
      PRO: "/images/pencil.svg",
      REJ: "/images/drawing-pin-solid.svg",
      DONE: "/images/clean.svg"
    };
    return icons[state] || icons.NEW;
  };

  return (
    <Image
      src={getStateIcon(state)}
      alt={`${state} icon`}
      width={16}
      height={16}
    />
  );
};

export default StateIcon;