import { useState } from "react";
import Image from "next/image";

export default function ButtonGroup({
  setTopButtonChecked,
  setBottomButtonChecked,
}) {
  const [selectedTopButtons, setSelectedTopButtons] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false); // ALL 버튼 상태
  const [selectedBottomButton, setSelectedBottomButton] = useState("");

  const topButtons = [
    { id: "all", label: "ALL" },
    { id: "child1", label: "아이1" },
    { id: "child2", label: "아이2" },
    { id: "child3", label: "아이3" },
  ];

  const bottomButtons = [
    { id: "cleaning", label: "청소", icon: "/images/broomImg.svg" },
    { id: "habit", label: "생활습관", icon: "/images/pinImg.svg" },
    { id: "improve", label: "자기계발", icon: "/images/pencilImg.svg" },
    { id: "etc", label: "기타", icon: "/images/etcImg.svg" },
  ];

  const handleTopButtonClick = (id) => {
    if (id === "all") {
      if (isAllSelected) {
        setIsAllSelected(false);
        setTopButtonChecked([]);
      } else {
        setIsAllSelected(true);
        const allSelections = ["child1", "child2", "child3"];
        setSelectedTopButtons(allSelections);
        setTopButtonChecked(allSelections);
      }
    } else {
      const newSelection = selectedTopButtons.includes(id)
        ? selectedTopButtons.filter((button) => button !== id)
        : [...selectedTopButtons, id];

      setSelectedTopButtons(newSelection);
      setIsAllSelected(false);
      setTopButtonChecked(newSelection);
    }
  };

  const handleBottomButtonClick = (id) => {
    if(id == selectedBottomButton){
      setSelectedBottomButton("");
    setBottomButtonChecked("");
    }
    else{
      setSelectedBottomButton(id);
      setBottomButtonChecked(id);
    }
  };

  const getButtonClasses = (id, isSelected) => {
    const baseClasses =
      "flex-grow h-8 flex items-center justify-center rounded-md py-2 text-R-12 font-medium transition-all duration-200";

    if (isSelected) {
      return `${baseClasses} bg-main02 text-white`; // 선택된 버튼 스타일
    } else {
      return `${baseClasses} bg-grey01/20 text-neutral-400`; // 선택되지 않은 버튼 스타일
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="text-R-10 mb-1 text-sub02">미션을 수행할 자녀</div>
      <div className="flex flex-row justify-between gap-3 w-full mb-2">
        {topButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleTopButtonClick(button.id)}
            className={getButtonClasses(
              button.id,
              button.id === "all"
                ? isAllSelected
                : selectedTopButtons.includes(button.id),
            )}
          >
            <span className="text-R-10 whitespace-nowrap overflow-hidden">
              {button.label}
            </span>
          </button>
        ))}
      </div>
      <div className="text-R-10 mb-1 mt-2 text-sub02">미션 카테고리</div>
      <div className="flex flex-row justify-between gap-2 w-full">
        {bottomButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleBottomButtonClick(button.id)}
            className={`${getButtonClasses(button.id, button.id === selectedBottomButton)} flex items-center gap-2`}
          >
            <Image
              src={button.icon}
              alt={button.label}
              width={10}
              height={10}
              className={
                selectedBottomButton === button.id
                  ? "invert brightness-100"
                  : "invert-50 brightness-150"
              }
            />
            <span className="text-R-10 whitespace-nowrap overflow-hidden">
              {button.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
