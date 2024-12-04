'use client'
import { useMutation } from "@tanstack/react-query";
import { submitTransfer } from "@/src/apis/transaction";
import { urlPath } from "@/src/constants/common";
import PasswordTop from "../signup/PasswordTop";
import PasswordBottom from "../signup/PasswordBottom";
import { useState } from "react";
import { useTransaction } from "@/src/query/transactionQuery";
import { useRouter } from "next/navigation";
export default function TransferPassword({selectedAccount, sendUser, transferAmount}) {
    const [isInput, setIsInput] = useState(Array(6).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);
  const router = useRouter();
    const {mutate, isLoading: isUpdating} = useTransaction();
    
      const handleSubmit = () => {
        mutate(
            {
                parentAccountNumber: sendUser.accountNumber,
                childAccountNumber: selectedAccount.accountNumber,
                amount: transferAmount,
                sender: sendUser.name,
                receiver: selectedAccount.name,
                simplePassword: pwd,
              },
              {
                onSuccess: () => {
                    alert("이체가 성공적으로 완료되었습니다!");
                    router.push(urlPath.DONE);
                  },
                  onError: (error) => {
                    alert("이체 실패: " + error.message);
                },
              },

        );
        
        
      };
    return (
        <>
        <PasswordTop
          isInput={isInput}
          pwd={pwd}
          setIsInput={setIsInput}
          setPwd={setPwd}
          setAllowed={setAllowed}
          index={6}
          isSingleInput={true}
        />
        <PasswordBottom
          pwd={pwd}
          isInput={isInput}
          allow={allow}
          setIsInput={setIsInput}
          setPwd={setPwd}
          setAllowed={setAllowed}
          isSingleInput={true}
          type={"childtransfer"}
          onConfirmClick={handleSubmit}
        />
      </>
    );
}