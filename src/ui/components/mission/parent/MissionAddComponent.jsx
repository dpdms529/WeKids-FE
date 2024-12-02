"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputDateBox from "@/src/ui/components/atoms/InputDateBox";
import MissionConfirmModal from "../MissionConfirmModal";
import { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import toast, { Toaster } from "react-hot-toast";

export default function MissionAddComponent({ setIsModalOpen }) {
  const [child, setChild] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [reward, setReward] = useState("");
  const [period, setPeriod] = useState("");
  const [checked, setChecked] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  useEffect(() => {
    if (child.length && category && title && method && reward && period) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [child, category, title, method, reward, period]);

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
      setConfirmModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const AddAndCloseModal = () => {
    if (checked) {
      setIsModalOpen(false);
    } else {
      toast("빈칸을 모두 채워주세요!");
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-full">
      <Toaster />
      <p className="text-B-18 mb-5 px-7 pt-10">미션 등록하기</p>
      <div className="w-full overflow-y-auto gap-3 h-full mb-1 px-7 pb-10">
        <div className="flex flex-col gap-1">
          <ButtonGroup
            setTopButtonChecked={setChild}
            setBottomButtonChecked={setCategory}
          />
          <div className="flex flex-col gap-1 mb-5 mt-5">
            <p className="text-R-10 text-sub02">미션명</p>
            <div
              className={`${title != "" ? "bg-main02/20" : "bg-grey01/20"} rounded-lg text-R-12 shadow-md text-black/80`}
            >
              <textarea
                className="w-full h-8 bg-transparent rounded-md resize-none outline-none p-2"
                placeholder="미션명을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <p className="text-R-10 text-sub02">미션 완료 방법</p>
          <div
            className={`${method != "" ? "bg-main02/20" : "bg-grey01/20"} rounded-lg text-R-12 shadow-md text-black/80`}
          >
            <textarea
              className="w-full h-32 bg-transparent rounded-md resize-none outline-none p-2"
              placeholder="아이가 미션을 완료할 수 있게 설명을 입력해 주세요."
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <p className="text-R-10 text-sub02">미션 완료 시 수령 금액</p>
          <div
            className={`${reward != "" ? "bg-main02/20" : "bg-grey01/20"} rounded-lg text-R-12 shadow-md text-black/80`}
          >
            <input
              type="text"
              className="w-full h-8 bg-transparent rounded-md outline-none p-2"
              placeholder="미션 완료 시 아이가 수령할 금액을 입력해주세요."
              value={reward}
              onChange={handleRewardChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <InputDateBox
            value={period}
            onChange={(value) => setPeriod(value)}
            label="미션 만료일"
            className={`${period != "" ? "bg-main02/20" : "bg-grey01/20"}`}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-row gap-4 w-full justify-between h-[40px] mt-9">
            <div className="flex flex-col w-full">
              <CustomButton
                size="mediumLarge"
                rounded={true}
                onClick={handleCancel}
                className="flex bg-stone-300 hover:bg-neutral-400 text-R-15 w-full"
              >
                취 소
              </CustomButton>
            </div>
            <div className="flex flex-col w-full">
              <CustomButton
                size="mediumLarge"
                rounded={true}
                onClick={AddAndCloseModal}
                className={` ${!checked ? "bg-stone-300 hover:bg-neutral-400" : "bg-main03 hover:bg-main01"} text-R-15 w-full`}
              >
                미 션 등 록
              </CustomButton>
              {isConfirmModalOpen && (
                <MissionConfirmModal
                  setParentOpen={setIsModalOpen}
                  setOpen={setConfirmModalOpen}
                  text={`작성중인 미션이 있습니다. <br/> 그래도 나가시겠습니까?`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
