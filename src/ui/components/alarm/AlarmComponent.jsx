'use client';

import { CheckAlarmData } from "@/src/apis/alarm";
import AlarmCard from "../atoms/AlarmCard";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useUpdateAlarmChecked } from "@/src/query/alarmQuery";

const AlarmComponent = ({ data }) => {

  const { mutate, isLoading: isUpdating } = useUpdateAlarmChecked();

  const OnCheckClicker = (idx) => {
    console.log(idx);
    
      mutate(
        { alarmId: idx + 1 },
        {
          onSuccess: () => {
            console.log("메모 업데이트 성공!");
          },
          onError: (error) => {
            console.error("메모 업데이트 실패:", error.message);
          },
        },
      );
    
  };

  return (
    <>
      <div className="flex flex-col w-full h-5/6 overflow-y-auto scrollbar-hide">
        {data.map((alarm, index) => (
          <AlarmCard
            key={index}
            index={index}
            type={alarm.type}
            targetId={alarm.targetId}
            targetState={alarm.targetState}
            isChecked={alarm.isChecked}
            onClick={() => OnCheckClicker(index)} // index 전달
          />
        ))}
      </div>
      <div className="flex justify-center items-center h-1/6 text-R-10 text-black/40">
        받은 알림은 30일 동안 보관됩니다.
      </div>
    </>
  );
};

export default AlarmComponent;
