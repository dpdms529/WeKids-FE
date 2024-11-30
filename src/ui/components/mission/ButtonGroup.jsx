import { useState } from "react";

export default function ButtonGroup() {
  const [selectedTopButton, setSelectedTopButton] = useState("");
  const [selectedBottomButton, setSelectedBottomButton] = useState("");

  const topButtons = [
    { id: "all", label: "ALL" },
    { id: "child1", label: "아이1" },
    { id: "child2", label: "아이2" },
    { id: "child3", label: "아이3" },
  ];

  const bottomButtons = [
    { id: "chores", label: "집안일" },
    { id: "errand", label: "심부름" },
    { id: "exercise", label: "운동" },
    { id: "etc", label: "기타" },
  ];

  const handleTopButtonClick = (id) => {
    setSelectedTopButton(id);
  };

  const handleBottomButtonClick = (id) => {
    setSelectedBottomButton(id);
  };

  const getButtonClasses = (id, selectedId) => {
    const baseClasses =
      "w-full h-10 flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200";

    if (selectedId === id) {
      return `${baseClasses} bg-main02 text-white`; // 선택된 버튼 스타일
    } else {
      return `${baseClasses} bg-black/10 text-neutral-400`; // 선택되지 않은 버튼 스타일
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-between gap-3 w-full">
        {topButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleTopButtonClick(button.id)}
            className={getButtonClasses(button.id, selectedTopButton)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="text-R-14">
        미션 카테고리
      </div>
      <div className="flex flex-row justify-between gap-3 w-full">
        {bottomButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleBottomButtonClick(button.id)}
            className={getButtonClasses(button.id, selectedBottomButton)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
