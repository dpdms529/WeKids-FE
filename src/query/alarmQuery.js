"use client";
import { useMutation } from "@tanstack/react-query";
import { CheckAlarmData } from "../apis/alarm";
export const useUpdateAlarmChecked = () => {
  console.log("?");
  return useMutation({
    mutationFn: ({ alarmId }) => {
      console.log(alarmId);
      return CheckAlarmData({ alarmId });
    },
    onSuccess: (data) => {
      console.log("메모 업데이트 성공:", data);
    },
    onError: (error) => {
      console.error("메모 업데이트 실패:", error.message);
    },
  });
};
