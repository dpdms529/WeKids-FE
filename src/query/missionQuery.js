import { useMutation } from "@tanstack/react-query";
import { createMission } from "../apis/mission";

export const useCreateMission = () => {
    return useMutation({
      mutationFn: ({ childId, title, content, deadline, amount, category
       }) => {
        return createMission({ childId, title, content, deadline, amount, category });
      },
      onSuccess: (data) => {
        console.log("성공:", data);
      },
    });
  };

