'use client'
import Header from "@/src/ui/layout/Header";
import { useSensitiveDataStore } from "@/src/stores/cardStore";
import DeliveryComponent from "@/src/ui/components/card/DeliveryComponent";
import { useEffect } from "react";
import { useRegisterPassword } from "@/src/query/cardQuery";



const CardIssueCompleteNodelivery = () => {
  const { getChildId, getResidentRegistrationNumber, getCardPassword, getAccountPassword } = useSensitiveDataStore();
  const { mutate, isLoading } = useRegisterPassword();

  useEffect(() =>{
    console.log(getChildId())
    console.log(getResidentRegistrationNumber())
    console.log(getCardPassword())
    console.log(getAccountPassword())
    mutate(
      {
      "childId": getChildId(),
      "residentRegistrationNumber": getResidentRegistrationNumber(), // 상태에서 가져온 값
      "accountPassword": getAccountPassword(), // 상태에서 가져온 값
      "cardPassword": getCardPassword() ? getCardPassword() : "1234",
      },
      {
        onSuccess: () => {
          console.log("비밀번호 등록이 성공적으로 완료되었습니다.");
        },
        onError: (error) => {
          console.error("비밀번호 등록 실패:", error.message);
        },
      }
    );
  }, [])
  

   
    

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Header />
      <DeliveryComponent />
    </div>
  );
};

export default CardIssueCompleteNodelivery;
