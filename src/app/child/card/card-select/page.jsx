"use client";

import React, { useState } from "react";
import { useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { characterInfoMap, colorTypeMap } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import ColorButton from "@/src/ui/components/card-select/ColorButton";
import CharacterButton from "@/src/ui/components/card-select/CharacterButton";
import CardIssueModal from "@/src/ui/components/card-select/CardIssueModal";
import { designCreate } from "@/src/services/design";

const queryClient = new QueryClient();

const CardDesignSelector = () => {
  const [designState, setDesignState] = useState({
    selectedCharacter: "HEARTSPRING",
    selectedColor: "BLUE",
    isModalOpen: false,
    errorMessage: "",
    isLoading: false,
  });

  const mutation = useMutation({
    mutationFn: designCreate,
    onSuccess: (data) => {
      setDesignState((prev) => ({
        ...prev,
        selectedColor: data.color,
        isModalOpen: true,
        errorMessage: "",
      }));
    },
    onError: (error) => {
      console.error("Error submitting design:", error.message);
      setDesignState((prev) => ({
        ...prev,
        errorMessage: "디자인 제출에 실패했습니다. 다시 시도해 주세요.",
      }));
    },
    onMutate: () => {
      setDesignState((prev) => ({ ...prev, isLoading: true }));
    },
    onSettled: () => {
      setDesignState((prev) => ({ ...prev, isLoading: false }));
    },
  });

  const handleCharacterClick = (character) => {
    setDesignState((prev) => ({ ...prev, selectedCharacter: character }));
  };

  const handleColorClick = (colorClass) => {
    const colorKey = Object.keys(colorTypeMap).find(
      (key) => colorTypeMap[key].colorClass === colorClass
    );

    if (colorKey) {
      setDesignState((prev) => ({ ...prev, selectedColor: colorKey }));
    } else {
      console.error("Invalid color class:", colorClass);
    }
  };

  const handleConfirmClick = () => {
    const designData = {
      color: designState.selectedColor,
      character: designState.selectedCharacter,
    };
    console.log("Sending data:", designData);
    mutation.mutate(designData);
  };

  const handleModalClose = () => {
    setDesignState({
      selectedCharacter: "HEARTSPRING",
      selectedColor: "BLUE",
      isModalOpen: false,
      errorMessage: "",
      isLoading: false,
    });
  };

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col items-center">
        <h2 className="R-20 mb-4 text-left w-full">카드 디자인 선택</h2>
        <div className="w-[331px] h-[935px] flex-shrink-0 rounded-[10px] border border-black bg-white p-4">
          <div className="flex flex-col items-center mt-4">
            <CardCharacter
              selectedCharacter={designState.selectedCharacter}
              selectedColor={designState.selectedColor}
            />
          </div>
          <div className="text-center mb-12 mt-10">
            <h3 className="R-20 mb-3">배경색</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-5 justify-items-center">
                {Object.values(characterInfoMap).map((info) => (
                  <ColorButton
                    key={info.colorClass}
                    colorClass={info.colorClass}
                    onClick={() => handleColorClick(info.colorClass)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-4">
            <h3 className="R-20 mb-4">카드 캐릭터</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-5">
                {Object.keys(characterInfoMap).map((character) => (
                  <CharacterButton
                    key={character}
                    character={character}
                    imagePath={characterInfoMap[character].imagePath}
                    className="w-12 h-12 cursor-pointer"
                    onClick={() => handleCharacterClick(character)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col flex mt-10 mb-4">
          <CustomButton
            size="large"
            onClick={handleConfirmClick}
            disabled={designState.isLoading}
          >
            {designState.isLoading ? "제출 중..." : "확인"}
          </CustomButton>
          {designState.errorMessage && (
          <p className="text-red-500">{designState.errorMessage}</p>
          )}
          <CardIssueModal
            isOpen={designState.isModalOpen}
            onClose={handleModalClose}
          />
        </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CardDesignSelector />
  </QueryClientProvider>
);

export default App;