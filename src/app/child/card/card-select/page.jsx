"use client";

import React, { useState } from "react";
import { useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { characterInfoMap, colorTypeMap } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";
import ColorButton from "@/src/ui/components/card-select/ColorButton";
import CharacterButton from "@/src/ui/components/card-select/CharacterButton";
import CardIssueModal from "@/src/ui/components/card-select/CardIssueModal";

const queryClient = new QueryClient();

const CardDesignSelector = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("HEARTSPRING");
  // const [selectedColor, setSelectedColor] = useState(colorTypeMap["BLUE"].colorClass);
  const [selectedColor, setSelectedColor] = useState("BLUE");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태 추가
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleColorClick = (colorClass) => {
    const colorKey = Object.keys(colorTypeMap).find(
      key => colorTypeMap[key].colorClass === colorClass
    );
  
    if (colorKey) {
      setSelectedColor(colorKey); // Enum 값 (예: "BLUE") 설정
    } else {
      console.error("Invalid color class:", colorClass);
    }
  };
  // Mutation for POST request using TanStack Query
  const mutation = useMutation({
    mutationFn: (designData) => {
      return axios.post("http://localhost:8080/api/v1/design", designData);
    },
    onSuccess: (data) => {
      // 서버에서 응답을 받은 후 색상 매핑
      // const mappedColor = colorTypeMap[data.color]?.colorClass || colorTypeMap["BLUE"].colorClass; // 기본값 설정
      setSelectedColor(data.color);
      setIsModalOpen(true);
      setErrorMessage(""); // 성공 시 오류 메시지 초기화
    },
    onError: (error) => {
      console.error("Error submitting design:", error.response ? error.response.data : error.message);
      setErrorMessage("디자인 제출에 실패했습니다. 다시 시도해 주세요.");
    },
    onMutate: () => {
      setIsLoading(true); // 요청 시작 시 로딩 상태 설정
    },
    onSettled: () => {
      setIsLoading(false); // 요청 완료 후 로딩 상태 해제
    }
  });

  // 버튼을 눌러서 저장되는 데이터 부분 sendingData
  const handleConfirmClick = () => {
    const designData = {
      color: selectedColor,
      character: selectedCharacter,
    };
    console.log("Sending data:", designData);
    mutation.mutate(designData);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // setSelectedCharacter("HEARTSPRING"); // 초기값으로 리셋
    // setSelectedColor(colorTypeMap["BLUE"].colorClass); // 초기값으로 리셋
    setSelectedCharacter("HEARTSPRING"); // 초기값으로 리셋
    setSelectedColor("BLUE"); // Enum 값으로 초기화
  };

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col items-center">
        <h2 className="R-20 mb-4 text-left w-full">카드 디자인 선택</h2>
        <div className="w-[331px] h-[935px] flex-shrink-0 rounded-[10px] border border-black bg-white p-4">
          <div className="flex flex-col items-center mt-4">
            <CardCharacter
              selectedCharacter={selectedCharacter}
              selectedColor={selectedColor}
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
            disabled={isLoading}
          >
            {isLoading ? "제출 중..." : "확인"}
            
          </CustomButton>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* 오류 메시지 표시 */}
          <CardIssueModal
            isOpen={isModalOpen}
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
