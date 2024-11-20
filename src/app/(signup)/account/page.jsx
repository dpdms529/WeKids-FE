'use client'
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import ParentChildSelector from "@/src/ui/Components/signup/ParentChildSelector";
import SelectorAccount from "@/src/ui/Components/signup/SelectorAccount";
import Header from "@/src/ui/layout/Header";
import {useState} from "react";

const dummyData = [
    { id: 1, name: "입출금 통장", account: 111-111-111, balance: 1000000 },
    { id: 2, name: "적금 통장", account: 222-222-222, balance: 1000000 },
    { id: 3, name: "예금 통장", account: 333-333-333, balance: 1000000 },
    { id: 4, name: "모임 통장", account: 444-4444-444, balance: 1000000 },
  ];

export default function Page() {

    const [selectedAccounts, setSelectedAccounts] = useState(
        dummyData.map(() => false)
      );
      
      const toggleAccountSelection = (index) => {
        setSelectedAccounts((prev) =>
          prev.map((isSelected, idx) => (idx === index ? !isSelected : isSelected))
        );
      };

    return (
        <div className="flex flex-col bg-white h-screen max-w-[393px] overflow-y-hidden">
            <Header />
            <div className="flex flex-col h-4/5 mx-7">
            <div className="flex flex-col gap-5">
                <div className="pt-5">
                    <span className="flex text-R-28">내 계좌</span>
                </div>
                <div className="flex">
                <CustomButton rounded={true} color={"gray"} className="pointer-events-none h-10 flex items-center justify-between px-4" >
                    <span className="text-left">총 4 개</span>
                    <span className="text-right">40000원</span>
                </CustomButton>
                </div>
            </div>
                <div className="flex flex-col my-4 w-full overflow-y-auto scrollbar-hide">
                {dummyData.map((account, index) => (
                    <ParentChildSelector
                    key={account.id}
                    isSelected={selectedAccounts[index]} // 선택 상태
                    className="my-4"
                    onClick={() => toggleAccountSelection(index)} // 클릭 이벤트
                >
                    <SelectorAccount name={account.name} account={account.account} balance={account.balance} />
                </ParentChildSelector>
                ))}      
                </div>
            </div>
            <div className="flex">
                <CustomButton >
                    가져오기
                </CustomButton>
            </div>
        </div>
    );
}