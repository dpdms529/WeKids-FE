"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputDateBox from "@/src/ui/components/atoms/InputDateBox";
import ButtonGroup from "@/src/ui/components/mission/ButtonGroup";
import { useEffect, useState } from "react";

export default function MissionAddComponent({ setIsModalOpen }) {
  const [child, setChild] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [reward, setReward] = useState("");
  const [period, setPeriod] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(child.length && category && title && method && reward && period){
      setChecked(true);
    }
    else{
      setChecked(false);
    }
  }, [child, category, title, method, reward, period])

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

  const handleCancel = () => {
    if (child.length || category || title || method || reward || period) {
      if (
        confirm(
          "입력된 데이터가 있습니다. 취소하면 작성 중인 내용이 모두 삭제됩니다. 계속하시겠습니까?"
        )
      ) {
        setIsModalOpen(false);
      }
    } else {
      setIsModalOpen(false);
    }
  };

  const AddAndCloseModal = () => {
    if(checked){
      setIsModalOpen(false);
    }else{
      alert('빈칸을 전부 채워주세요.')
    }
    
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-10 h-full">
      <div className="w-full flex flex-col text-B-22 mb-5">미션 등록하기</div>
      <div className="flex flex-col w-full overflow-y-auto scrollbar-hide gap-3 h-full mb-1">
        <div className="flex flex-col gap-1">
          <div className="text-R-14">💡미션을 수행할 자녀</div>
          <ButtonGroup
            setTopButtonChecked={setChild}
            setBottomButtonChecked={setCategory}
          />
          <div className="flex flex-col gap-1 mb-5 mt-5">
            <div className="text-R-14">💡미션명</div>
            <div className="bg-blue-100 rounded-lg text-R-12 shadow-md text-black">
              <textarea
                className="w-full h-8 bg-blue-100 rounded-md resize-none outline-none p-2"
                placeholder="미션명을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <div className="text-R-14">💡미션 완료 방법</div>
          <div className="bg-blue-100 rounded-lg text-R-12 shadow-md text-black">
            <textarea
              className="w-full h-32 bg-blue-100 rounded-md resize-none outline-none p-2"
              placeholder="아이가 미션을 완료할 수 있게 설명을 입력해 주세요."
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <div className="text-R-14">💡미션 완료 시 수령 금액</div>
          <div className="bg-blue-100 rounded-lg text-R-12 shadow-md text-black">
            <input
              type="text"
              className="w-full h-8 bg-blue-100 rounded-md outline-none p-2"
              placeholder="미션 완료 시 아이가 수령할 금액을 입력해주세요."
              value={reward}
              onChange={handleRewardChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <InputDateBox
            value={period}
            onChange={(value) => setPeriod(value)}
            label="💡미션 만료일"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-row gap-4 w-full justify-between h-[40px] mt-9">
            <div className="flex flex-col w-full">
              <CustomButton
                size="mediumLarge"
                rounded={true}
                onClick={handleCancel}
                className="flex text-R-18 bg-stone-300 hover:bg-neutral-400 w-full"
              >
                취 소
              </CustomButton>
            </div>
            <div className="flex flex-col w-full">
              <CustomButton
                size="mediumLarge"
                rounded={true}
                onClick={AddAndCloseModal}
                className={` ${!checked ? "bg-stone-300 hover:bg-neutral-400" : "bg-main03 hover:bg-main01" } text-R-18  w-full`}
              >
                미 션 등 록
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
