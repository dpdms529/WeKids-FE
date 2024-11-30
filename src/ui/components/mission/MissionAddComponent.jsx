"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputDateBox from "@/src/ui/components/atoms/InputDateBox";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import ButtonGroup from "@/src/ui/components/mission/ButtonGroup";
import { useState } from "react";

export default function MissionAddComponent({ setIsModalOpen }) {
  const [child, setChild] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [reward, setReward] = useState("");
  const [period, setPeriod] = useState("");

  // 금액 포맷팅 함수
  const formatReward = (value) => {
    const onlyNumbers = value.replace(/[^0-9]/g, ""); // 숫자만 추출
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 쉼표 추가
  };

  const handleRewardChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatReward(inputValue); // 포맷팅
    setReward(formattedValue);
  };

  const AddAndCloseModal = () => {
    alert("미션이 등록 되었습니다!");
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden justify-center items-center p-10">
      <div className="w-full flex flex-col text-B-22 mb-1">미션 등록하기</div>
      <div className="flex flex-col overflow-y-auto scrollbar-hide gap-3 h-[348px] mb-1">
        <div className="flex flex-col gap-1">
          <div className="text-R-14"></div>
          <div>
            <InputTextBox
              placeholder="미션명을 입력해주세요."
              value={title}
              text={title}
              onChange={(value) => setTitle(value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-R-14">💡미션 완료 방법</div>
          <div>
            <InputTextBox
              height={80}
              placeholder="아이가 미션을 완료할 수 있게 설명을 입력해 주세요."
              value={method}
              text={method}
              onChange={(value) => setMethod(value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-R-14">💡미션 완료 시 수령 금액</div>
          <div>
            <InputTextBox
              placeholder="미션 완료 시 아이가 수령할 금액을 입력해주세요."
              value={reward}
              onChange={handleRewardChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <InputDateBox value={period} onChange={setPeriod} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <ButtonGroup
          setTopButtonChecked={setChild}
          setBottomButtonChecked={setCategory}
        />
        <div className="flex flex-row mt-1">
          <CustomButton
            size="mediumLarge"
            rounded={true}
            onClick={AddAndCloseModal}
          >
            미 션 등 록
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
